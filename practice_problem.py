#note: Inputs to all problems are strings!

#Problem 0
def p0(n):
    total = 0
    for i in range(1,int(n)+1):
        total += i
    return total


#Problem 1
def p1(n):
    a='true'
    for c in range(len(n)-1):
        if n[c]>n[c+1]:
            a='false'
    return(a)


#Problem 2
def p2(n):
    dct={'0':1,'6':1,'8':2,'9':1}
    count=0
    for i in str(n):
        if i in dct.keys():
            count+=dct[i]
    return(count)


#Problem 3
def p3(n):
    n = int(n)
    lst = [str(n)]

    while str(n) != str(n)[::-1]:
        n = n + int(str(n)[::-1])
        lst.append(str(n))
        
    return(" ".join(lst))


#Problem 4
def p4(n):
    p=0
    a=False
    for c in n:
        if c=='.':
            p+=1
        if ord(c)>64 and ord(c)<123:
            a=True
        if p>1:
            a=True
    if a:
        return('string')
    elif p==1:
        return('float')
    else:
        return('integer')


#Problem 5
def p5(n,x):
    n = int(n)
    x = x.split()

    l = []
    period = False
    negative = False
    for i in x:
        if i == '.':
            period = True
        elif i == '-':
            negative = True
        else:
            l.append(i)

    l.sort()

    l = "".join(l)
    if not negative and not period:
        l = l[::-1]
        l = float(l)
    elif not negative:
        l = l[::-1]
        l = float(l[:-1] + '.' + l[-1])
    elif period:
        l = float('-' + l[0] + '.' + l[1:])
    else:
        l = float('-' + l)
        
    l = str(l)

    if '.' in l:
        if int(l[l.index('.')+1:]) == 0:
            l = int(float(l))
    elif '.' not in l:
        l = int(l)
    return(l)
