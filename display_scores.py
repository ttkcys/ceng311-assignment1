#!/usr/bin/env python3

import sqlite3

def display_scores():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    
    cursor.execute('''
    SELECT users.username, scores.score 
    FROM scores 
    JOIN users ON scores.user_id = users.id 
    ORDER BY scores.score DESC
    ''')
    
    scores = cursor.fetchall()
    
    print("Content-Type: text/html")
    print()
    print("<html><body><h1>Scores</h1><ul>")
    for username, score in scores:
        print(f"<li>{username}: {score}</li>")
    print("</ul></body></html>")
    
    conn.close()

display_scores()
