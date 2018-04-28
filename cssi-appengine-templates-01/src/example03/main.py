import jinja2
import os
import webapp2


jinja_environment = jinja2.Environment(loader=
    jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template_vars = {}
        template_vars["name"] = self.request.get('myname', default_value='Dracula')
        template_vars["food"] = self.request.get('food', default_value='Brocoli')
        template_vars["music"] = self.request.get('music', default_value='Techno')
        template = jinja_environment.get_template('templates/main.html')
        self.response.write(template.render(template_vars))

class CountHandler(webapp2.RequestHandler):
    def get(self):
        for i in range(1, 21):
          self.response.write('Hello %d <br>' % i)

app = webapp2.WSGIApplication([
  ('/', MainHandler),
  ('/count', CountHandler)
], debug=True)
