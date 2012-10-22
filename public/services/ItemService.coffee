define (require) ->
  ItemService = ($resource) ->
    $resource "/items/:_id"
