# Set the remote and branch (change these if needed)
REMOTE = origin
BRANCH = main

# Default target (runs when you just type "make")
push:
	@echo "Adding all changes..."
	git add .
	@echo "Committing changes..."
	git commit -m "$(MSG)"
	@echo "Pushing to $(REMOTE)/$(BRANCH)..."
	git push $(REMOTE) $(BRANCH)

# Target to force push (use with caution!)
force-push:
	@echo "Adding all changes..."
	git add .
	@echo "Committing changes..."
	git commit -m "$(MSG)"
	@echo "Force pushing to $(REMOTE)/$(BRANCH)..."
	git push $(REMOTE) $(BRANCH) -f

# Get the commit message from the command line 
# (or use a default if not provided)
MSG ?= "Automated commit from Makefile"