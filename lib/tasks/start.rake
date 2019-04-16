task :start do
  # exec 'foreman start -p 3000'
  exec 'foreman start -f Procfile.dev'
end
