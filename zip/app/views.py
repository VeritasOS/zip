# -*- encoding: utf-8 -*-

from flask import url_for, redirect, render_template, flash, g, session
from app import app

@app.route('/')
def index():
	return render_template('index.html')
