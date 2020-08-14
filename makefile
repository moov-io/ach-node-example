VERSION=v$(shell date -u +"%Y.%m.%d").1

.PHONY: docker release

docker:
	docker build --pull -t moov/ach-node-example:$(VERSION) .
	docker tag moov/ach-node-example:$(VERSION) moov/ach-node-example:latest

release:
	docker push moov/ach-node-example:$(VERSION)
	docker push moov/ach-node-example:latest
