from flask import Flask, render_template, request

app = Flask(__name__)

@app.rout('/')
def main():
    return render_template('app.html')

@app.route('/send', methods=['POST'])
def send(sum=sum):
    if request.method == 'POST':
        num1 = request.form['num1']
        num2 = request.form['num2']
        operation = request.form['operation']

    if (num1 != '' and num2 !='':)
        
        if operation == 'soma':
            sum = int(num1) + int(num2)
            return render_template('app.html', sum=sum)

        elif operation == 'subtracao':
            sum = float(num1) - float(num2)
            return render_template('app.html', sum=sum)

        elif operation == 'multiplicacao':
            sum = float(num1) * float(num2)
            return render_template('app.html', sum=sum)

        elif operation == 'divisao':
            sum = float(num1) / float(num2)
            return render_template('app.html', sum=sum)

        elif operation == 'modulo':
                sum = float(num1) % float(num2)
                return render_template('app.html', sum=sum)

        elif operation == 'potencia':
                sum = int(num1) ** int(num2)
                return render_template('app.html', sum=sum)

        else:
            return render_template('app.html')

    else:
        return render_template('app.html', sum="É necessário preencher os números")

@app.errorhandle(404)
def not_found(error):
    return render_template('error.html')

app.run(port = 8080, debug = True)