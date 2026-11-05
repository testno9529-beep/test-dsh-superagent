#!/usr/bin/env python3
"""
Simple HTTP server to test the welcome page
"""
import http.server
import socketserver
import os
import webbrowser
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve the welcome.html file by default
        if self.path == '/':
            self.path = '/welcome.html'
        return super().do_GET()
    
    def log_message(self, format, *args):
        # Suppress default logging
        pass

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print(f"Starting HTTP server on port {PORT}...")
    print(f"Serving files from: {os.getcwd()}")
    print(f"Open http://localhost:{PORT} in your browser")
    print("Press Ctrl+C to stop the server")
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            # Open browser automatically
            webbrowser.open(f'http://localhost:{PORT}')
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()