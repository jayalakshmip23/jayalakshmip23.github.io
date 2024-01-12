const sounds=['Hear my Name']

sounds.forEach(sound=>{
    const btn= document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click',()=>{
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound=>{
        const song= document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}


    // update counter


    const scriptURL = 'https://script.google.com/macros/s/AKfycbwFlmtD-KCnAeGuMBBALrhbZvPyLaE5BpHCy73tBnPat_vQUfydDkOZoqtnDVaTRofn/exec'
    const labels = document.querySelectorAll('.form-control label')    
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    
    const counters= document.querySelectorAll('.counter')
    
    counters.forEach(counter=>{
        counter.innerText='0'
        const updateCounter =()=>{
            const target =+counter.getAttribute('data-target')
            const c =+counter.innerText
    
            const increment=target/100
    
            if (c<target){
                counter.innerText =`${Math.ceil(c +increment)}`
                setTimeout(updateCounter, 1)
            }else{
                counter.innerText= target
            }
        }
    
        updateCounter()
    })
      
        labels.forEach(label=>{
            label.innerHTML = label.innerText
                .split('')
                .map((letter,idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
                .join('')
        })
    
    
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

// Work

const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeactiveclasses()
        panel.classList.add('active');
    })
})

function removeactiveclasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}