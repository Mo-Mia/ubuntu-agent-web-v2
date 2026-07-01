UPDATE listings
SET
  is_published = false,
  archived_at = now(),
  updated_at = now()
WHERE unique_id IN (
  '215fb246fd5494bd444282b6b79d0926',
  '95aac3bbc9ff116d5f124b28424e84ff',
  '6204084ac259c6cbe902656770e54ceb',
  'a87b73d50779547d72b26db5058705b7',
  '9a4026b5b1f3ffe6ba2d564041a21127',
  'fffb5631536de0bc83b50eba9065a15c'
);
