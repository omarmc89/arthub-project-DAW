Import("env")

# List installed packages
env.Execute("$PYTHONEXE -m pip list")

# Install custom packages from the PyPi registry
env.Execute("$PYTHONEXE -m pip install pkg1 pkg2")

# Install missed package
try:
    import some_package
except ImportError:
    env.Execute("$PYTHONEXE -m pip install some_package")