require 'yaml'

layout('site/layout.html.erb')

ignore('site/css/.sass-cache/')
ignore('site/css/countdown.css.sass')
ignore('site/css/nav.css.sass')
ignore('site/css/header.css.sass')
ignore('site/css/calendar.css.sass')
ignore('site/css/facts.css.sass')
ignore('site/css/footer.css.sass')
ignore('site/css/variables.css.sass')
ignore('site/css/deals.css.sass')
ignore(/\.sass-cache/)
ignore(/data/)
ignore(/\.vs/)
ignore(/misc/)
ignore(/psd/)
ignore('.gitignore')
ignore('readme.md')