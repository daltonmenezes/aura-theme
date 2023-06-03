local function mergeTo(to, from)
  local k, v = next(from, #from ~= 0 and #from or nil)

  while k do
    to[k] = v
    k, v = next(from, k)
  end
end

return {
  mergeTo = mergeTo
}
