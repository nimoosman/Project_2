import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from bson.json_util import dumps
import json

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)
#################################################
# Database Setup
#################################################

# Tyler- Getting rid of warning message
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///ExecDatabase.sqlite"

### Initialize database using create_engine
#engine = create_engine("sqlite:///ExecDatabase.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
Executions = Base.classes.cleaned_database



@app.route("/")
def index():
    """Return the homepage."""
    return render_template("table.html")


@app.route("/names")
def names():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(Executions).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(list(df.columns))

@app.route("/tables")
def show_tables():
    """Returns Data as a Table."""
    result = db.session.query(Executions).all()
    #df = pd.DataFrame(result).to_json(orient="records")
    df = pd.DataFrame(result).to_json(orient="records")
    
    # Tyler JSON to table


    return jsonify(json.loads(df))   
    #return render_template("table.html", df=jsonify(json.loads(df)))

if __name__ == "__main__":
    app.run(debug=True)
