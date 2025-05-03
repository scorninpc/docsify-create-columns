# docsify-create-columns
Simple way to create columns on docsify

# Usage

Simple create columns by add:


```markdown
[!columns]

[!column]

COLUMN 1

[!/column]

[!column]

COLUMN 2

[!/column]

[!column]

COLUMN 3

[!/column]

[!/columns]
```

You can also do some configs

```markdown
[!columns|spaceHorizontal:20px|spaceVertical:10px]

[!column]

COLUMN 1

[!/column]

[!column]

COLUMN 2

[!/column]

[!/columns]
```

# Options

| Property | Description                                                          |
|----------|--------------------------------------------------------------------- |
| spaceHorizontal | Padding in css units to left and right of each column |
| spaceVertical | Padding in css units to top and bottom of each column |
| marginTop | Padding in css units top of father container |
| marginBottom | Padding in css units bottom of father container |
| contentAlign | Text align of columns, allow `text-align` css values |

# ToDo

- [ ] Add css vars to style