# docsify-create-columns
Simple way to create columns on docsify

# Usage

Simple create columns by add:


```markdown
# Exemplo 1

[!columns|spaceHorizontal:20px|spaceVertical:10px]

[!column]

COLUNA 1

[!/column]

[!column]

COLUNA 2

[!/column]

[!column]

COLUNA 3

[!/column]

[!/columns]
```

![image](https://github.com/user-attachments/assets/84798611-7784-48a9-8728-42fde0fb868d)


You can also do some configs

```markdown
# Exemplo 2

[!columns|spaceHorizontal:20px|spaceVertical:10px|contentAlign:center]

[!column]

**COLUNA 1**

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

[!/column]

[!column]

**COLUNA 2**

when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

[!/column]

[!/columns]
```

![image](https://github.com/user-attachments/assets/d8c06f00-b9d5-42bb-a88c-2a0f132b1b7c)


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
