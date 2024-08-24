import figlet from 'figlet'

figlet(
  'React TS Boilerplate',
  {
    font: 'ANSI Regular',
  },
  function (err, message) {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return
    }
    console.log(message)

    figlet(
      'Hoxton',
      {
        font: 'Big',
        horizontalLayout: 'fitted',
      },
      function (err, info) {
        if (err) {
          console.log('Something went wrong...')
          console.dir(err)
          return
        }
        console.log(info)
        console.log(
          '\n***********************************************************************************************************************************************************\n',
        )
      },
    )
  },
)
