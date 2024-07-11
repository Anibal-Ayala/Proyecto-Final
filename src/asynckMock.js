const products =[
    {
        id: '1',
       name: 'Motorola V3',
       price :400,
       category: 'celular',
        img : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhgSFRIYGBgSGBgYGBgYGBEYGBIYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDQhISE0NzQ0NDE0MTQ0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ/MTQ0NP/AABEIAPkAygMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAABAAIDBAUGBwj/xABJEAACAQICBAoGBwUECwAAAAABAgADEQQhBRIxUQYHQWFxgZGhscETIjJSotEjQmJygrLCFCQzQ5JTg+HwFSVUY3N0k6Ozw9L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAQACAgICAgMBAAAAAAAAAQIRMQNBEiETIjJRYXGBQv/aAAwDAQACEQMRAD8A6/DaEQxLNtFaOigDbQR8FoA2C0kjbQBpEVobQWlEFoLR1orQBloLR9oLRkZaK0dFGDLQWjyILQSbaAiOtERAGWgtH2gtGDICJIRBaNKMiNtJCILRhkIoopg1KKKKAKKK003THGNgsNUalrPUemSrejVSqsMiNYkAkHI2vncQDcorTm2I42aKj1cLUF9hqPTp35wBrMeoGYuvxwOfYwik87vq/wBRCn4YDiuuzC6f4SYbAqDXqape+oihmd7bSFXO2zM2Ge2cmx3Gjj6gsnoaN+VELuPxOSvwzTNNaSq12NWtUZ3ewLNa9hsAAACgZ5AAZnfDkcOv4jjbwoNkw9d+c+hUH4ye6YzEcb5+pgR0vXIPYE85xoOTlrHtMt1KCBAQc7G/Mbn/AA7Yz4dIrcb2JPsYfDr970r+DLNh4P8AGrQqKwxi/s7qRZlWrUp1AeUaqkoRuPNnu4VeZBXuLxc8Djl39uMbRf8Atg/or+aSrW4ztHqPVqM/3Qg/O6zhDGRmP5Fw7eONPDNfUw1Y2Hq50LMbgWujtbIk35pVfjPa/q4IfirHwCTjOop5B2R9DGtRcFTdcroSSpHKM9krNntNlemODunKWOoCtSJ26rofapuACyN0XGYyIIMylpzLivxSBqqI5tUAqatslChApvvbXYW/3YnRFqES/ii6nSxaC0cpvFaJSO0UcRBaANMFo4iK0aV20Noopi0KKKGAY3TldqeHqOpsy03YHcQpIPdPNmM9R/Rq9tVbsRcMrXyXWOzLPLftnpjSQHo2uLjVa4OwjVNxPMNdr16x3ufzGRP5VpnpCEAubde0npMMJEFpYSIt5Vx4OQAMuUo9pI4Ymhh9b2m1PwufCXDhKWWtXZhn7KMLW2D1rc2fTzXVSREzXPkmfUv+0XP+UNfDjWOoTq8mva/Pe0kTIW3d8MdI1r5XnjgSI4rSS0IWSZgErYket1S5aVcYMx0Ss9lXVeJw3apzUkz/ABuPlOpmcm4lyTUqbhS1TzkOreDTrNp0Z6c+u1umuQhIhXZDaZtIaYI60BgZhEFo8wWjJciiimSyihigTFafxC08O7swUBSLnYC3qr2kgdc8zN/EqHe58TPQfGI9tH1ucUx/VVRfOefEzZzvdvGRP5VrP4w0xASVUHKwUbzfwAJMezUV/mu33afmzrKtBq5QNnCcXSGwOekU082kZxyclM9bjySIcwysJFaPfFjkpr1lz5iRnFH3VHVfxvHwmnBYiJEcQ28dSoPKA1n99u0iP4lysBDuMIQ7jKZcnaSe2NMfxHLIMhBsQQee48ZTxwzXr8pYwZJBG7ZzXvItIj2evyik4p9x0viXb6SqN6t/6/lOszkHE030rjmHejH9M7BOjPTn12tUjcR0ZR2R8zva50EFo4wQM2CPjbQC3FFFMzKKKKMNN4zD+4sPeqYcf99CfCcCw2ak73Y987xxoPbCKN9an8Id/wBM4Rgh9GD0+MjHda/+YqYrbI7ybFe1IDKSN4NaNY74wuIwk1oryIuIjUjJLeKQa/NF6Q7oBMYo0GGMmQ0YL634fON0slgvSfCWuD1PXZ1+yp7GHzlnhNgzTpo1si9ua+qflMrqTfDSZ/XlsvE4/wC9MN4T8lf5TtNpxjijokVlq/VZ2pk+66ozKD0q72+4Z2idM6cuu01DZJJHQ2SSRe156CIwwQMILRxggFmKKKQZRRRQDRONBVOENyQU1qigfWZV1AD1VCeqcUwKfRKenxM7TxrBRgXYga17A2F1DKdYA8+qOwTkuEofu9M71v3mT4p91erxmNfxgs5G75yuZax/8R+kysYwhqckbH1eSMtGAgjjBGAihMQgSUbIRAuyERk2ri9wvpcUyb6ZNuYOhPdNo40tFijg6TWz9OoO3lRz5TEcUQ/1j/dOewqZtPG9XD4PV92qh7mHnOLfP55W+bfhY03iwcjHULGwNWxFznelUFiOXO3ZO/Tzzxc1NXG0f+PT+K6+c9DmejOnHvtLQksjoSSRe1Z6CCGKBhBDFALEUUUgyiiigHO+OCpbBEb2/T/jOf6Mph8NSAGYRb7Nw3dM2bjlxD5U9b1DSDFeQP6UKG61uOqaVo/G6qKu5QOxQPKHhvavJP1jXMZnUbpMgMkqG5kbRezQvyQWjn2iIRiGWgtH2gIgDYjCImgEi7IY1dgjpRVuXFbW1NIqTy06g+C/lNj4y6mvhWP20PxW85pvASqExik+44+EzOcNsaHw7qDyofjWcfkl/NP+N8cfjrAcB31cXSO6vh//ADIPOekGE8zcEntiEO6pRPZVSemTtnoTpxb7S0OWSyKgZLIvas9FBCYIGEUJggFiKKKQZQGGNbZAOM8crev/AHdNev0jsfKc+WpYdA8pvvHA76+qwIQshTZ61k9ZgekkdRnPW5ZHi6a79KtYesRuJkZliunrN0nxkJW0oukTL3RoWTasWrDkqhKxas2XRXBz0lP09ZilPIgC2swJsCSdgN5lcVwbwylU9dWckKdYkkhSxya42CXM2hogEeBLultGNhn1GNw2ats1hy5chHL1SlCwuQihigGQ0HU1KutuU99h5y3pXEl6b9X5gZj8AfWb7v6lkuLf6Mjm8xM9T9uV5v68Dwda1W+7UPY6menjtnlzQzWdjuQnssZ6ivOjPTn32lo7ZNIKO2TyNdnnojAYYIGRgiivALEUUUgygMMBgHF+Ol/pKS8y/mac72npIm98cz3xNMbgv6vnNCpOAQTsuD3zPHTapnp5nrlSosyjrnnulCquccoqvaSYemGdVOxmVTzAkA+MBEZfKOIdK4R4B61NcNT1V1zdibgKiWyy5ynYZjMbgMRUanVuA2FUXXP6Vx7YW/1WAAB+1LGg+FVF0AruEqqoVmbJKgXYwbYDnmDbPZLuN4QYampb06MeRUIdj1DZ1zXNDXeGup6Okdt3JU71K52+GadMjprSRxNQPbVVRqonuL8z8t0xsWrzUiYI5VJ2AwimeUgdJ8hnAJcFtb7h8VgrNdTCllBANycidgttsOwRlTYZN7Pk7Rh9ZvuP+WepKLXVTvUHunlrRf8AEPOjjtUz0/gGvSpneiH4RNs9Mt9rlE5yxKtI5y1J12eeigiiiMIoooBYiiikGEa2yOjX2GK9COEcb73xqDcF/KPnNGtNy41nvpG27yRZqVplPqRvRTEOABfIbAQrWHWIalcsPYTqDC/YbRtoQl5XI4QnPk7zCKV+Q9v+Eu0cKW5JmtH6LGsBa5PYOcyNeSZPPjumHwmhS4LuSiKLljnlzDK8GjtEpiNdKbH0gJKIx/ir7qEfX+z9bkzFjkuEOOFvRIfVX2iPrMPKYDD1CrBgbEG4I2gzXw26vN9o8smfqG1cOUJBQAjffLtkdjzdQAnQ8Ph00rTNrJi0GewLigOXmfxmp43RL02KupUqbEHbOnXj/pz53z2wxudpMGrLb0bSPUmfxVyi1YHGR6JNqxtRcj0GL4nyj0V/FXrHdPTOhHvhaDb6NI9qLPMujT9KnTPSvBo/uWF/5ej+RZpnpG2Up7RLUq09olmTo89DBDBEZRRRQCxFFFIMI2psMdI62wyddU52898Y76+k25iw7LDymBFKZjhiutpSpY3AeoL84Zrjqvbqgo4SY3XEjpk5Y5MMTLmGwHKZfFNVhUlshM7q3pczJ2dQpjJVGZyk2lMQuHp+jU+u49c7gfqiWtZcNT1zbXb2Qfq8utb/ADsmoY/GFm1r53vfnhjM1rm9HrXxn12qYgkk5HORJTa/snsMtNpesf5nwp/8xn+kavvnqCjwE78zxz3XHq6rIaOqPSYVAGXVIN7MLdfJOkYNqOlaQVwFrqMnFvX+8OWckbFu2Rdj0knumc0DpFqbqymxBvOiazfqObefa5pjg+9ByrKZhamGtyTt2j6lHSVHVcAVAOa/SJp3CDgm9Ek6t15COWH1bx7Etkc6alInTLpEz1fAEckxuJ1EzLDt29G/qvI1nhpm8sVgE+kH2bnot/m3WJ6R4OAjB0Adq0kHYoHlPOWFX1gdguDztbfPSeh1th0G5bdhIinRaXF2y3KYlwSdHgoooJKyghggS1FFFIMJHW2GSSOtsk66pzt524Towx+I1LX9K7WOVwWJuCOYzHJpgoBrqyg7CwNiDuYfKZvEslTS9QOoZSamRsRty65bxOh0tZHKgCwU2dQBuDWb4phd5nE1HVnNs5lYGnpFH+sOoqe7b3TL4LHUUGsSS3JdXt22lDEcH9b6lNudSyN2Wt3ym3Bxhsp1F+69M+BJhxi+z51PSTSeO9IxN9vT3TCVDeZJtB1By4gfgc+AkZ0ZU9+t1pU+U0zMyfVZ6+V7jG2MIQ7j2GXzo5/7Sr/RU+UX+jDyvW/pceUucf2y4qolJvdPYZao1NTM5dJUeJjholeX0rdYHjHroymP5R/E48iZpNcFc8sto3hgMKQyEEj7R/SDMrjuNfFVl1KdFM8rhGY9N2JHwzWEoqvs0kXnzbyEmAY/Wt90KB33Mv52+kfGZVcVicViCWqOEHPaw6FHqjqAkVLR3rgreoSDrM2Sg5atidvLsvMgtEbbXI5TcntOyZPA0LsOkeMcl1fsrZOmnJUJcX5Ds5Mp6V0O16CHeD4measUmpWdfddx2OR5T0hwfa+Gpn7Mc9p16ZIbZbEpE5jplwSdHkooo2SsYLxGC8CXIoIpmZSKvskshxGyTv8AjTnbzXicRbSFRvtOO+ZQY/nmB00NTHVhyrVqDsciRjETLWJr7dOdcNjTHnf3ywmkyOWar+088IxR3yfxRX5G3nS+W2V30iOaawcVGnEnfCeGF+SthbHSB8XeYQ4iFa80z44z1usq1a8jZ7ykKvPHrUm2cs9aq0pkqZymKklR5rmMtVkqSTK4JACDziYOjVtMlh8RNcsq0/hDT1MZiBur1vztaehOD2WGQbhbsnBtNp6THMAP4tYfGw+c75oUWw6c4J7STJ909X6i+TnLoMoMZdEnSsexiijZDQrxQQXjJegiimSikdYXUx8Bis5nBx5v4x8EaGk62VhVK1V5w49b4w46prXpZ6C4bcCU0kEJc06lO4R1Aa6tmVZcri4uM8s985Fwp4DVsBqs1RHRyQGs62O5gQQO2Rm/Ul7ad/cawakBqRzYR+Rdb7pVu4GQujL7SkdII8ZpwipPSRwqStrQ3hwFoPDrSsHh1pUhVbSpJ0qZTHB4/wBMByiVE1kRVki1pRoU3qexTd/uo7eAl7DaHxLnVFIgnkZkB/pvrd0qJqVMRJRjLcsy2A4BYqpYsdQcytftfV7gZsuj+LWmtjVctzFma/UuqPGXOUW5aXoKgcRjVcC4Sx6XI1UHTnfqndsOmoip7qgdgtMZorQlDCi1OmBz2UW6LACZS8fCbeT75y8JSo5t0S5I00wJMF4ILyFiTBeK8F4yXooIpksooLwwBSDFYdaiFGAIO8AyeNgbTMfwSwzk6+Epn7QQKT1raYirwFwh9kVE+5Ue3YxM6SZE9BDtUTWbnuMri+q5dV4u6DbK9T8S0H/MkrNxa0/7YddGl5WnVHwCHeJC2jhyN3SprN9Fxv8AtzAcWqf2qf8AR+TyZOLaiNtReqkPNjOjnR594Rv7C28d8fOS/dodPi8wwzLHqp4X9SGZLD8D8Mn1XPQwT8gWbT+xNzQjBNvEfOU2aYanoTDL/JVre/rP+cmZCmioLKoUblAA7BLYwR3iEYL7UPlkfDVVtaK8urhV55ItBRyRfOHPHWPUE8klWgx5pdsBBeK7qp44jo0tWSXigJkc8rk4G8BMF4CYwJMF40mDWgTJRRoimTQorwGKAK8EUQgCiMUEAJgvBEYwV4iYIDGBgiMBjgEwRRpgBvBeKAxkRiiMbAivBeIxrQgK8BMRgMZFeC8RjYyf/9k=',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    {
        id: '2',
       name: 'Sony Ericson T290',
       price :500,
       category: 'celular',
        img: 'https://www.celulares.com/fotos/sony-ericsson-t290-1802-g-alt.jpg', 
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },

    {
        id: '3',
       name: 'Ipad 2022 Air',
       price :2000,
       category: 'tablet',
        img:'https://i.blogs.es/78f434/ipad-air-2020-analisis-applesfera--29/1366_2000.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },



]


export const getProducts =() =>{
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve (products)
        },1000
        )
    })
}


export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve)=>{
        setTimeout (() =>{
            resolve(products.filter(prod=>prod.category===categoryId))
        },1000)
    })
}

export const getProductbyId = (productId) =>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (products.find (prod => prod.id ===productId))
        }, 500)
    })
}