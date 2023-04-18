import React from "react"

class Season extends React.Component{
    state = {
        muadong: ['#333'],
       
    }

    setSeason = () => {
        let c = ['#333']
        let d = '#ccc'
        c.push(d)
        let muadong = this.state.muadong.length === c.length ? d : c
        this.setState ({muadong})
    }

    
    setSeason1 = () => {
        let c = ['#333']
        let d = '#bc5555' 
        c.push(d)
        let muadong = this.state.muadong.length === c.length ? d : c
        this.setState ({muadong})
    } 
    setSeason2 = () => {
        let c = ['#333']
        let d = '#89d147'
        c.push(d)
        let muadong = this.state.muadong.length === c.length ? d : c
        this.setState ({muadong})
    } 
    setSeason3 = () => {
        let c = ['#333']
        let d = '#5378bb'
        c.push(d)
        let muadong = this.state.muadong.length === c.length ? d : c
        this.setState ({muadong})
    } 



    render() {
        return(
            
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                <div style={{textAlign:'center'}} >
                    <div style={{backgroundColor: this.state.muadong, width:'400px', height:'200px'}}>
                    </div>    
                    <button  onClick={this.setSeason}>Mua Dong</button>   
                  
                    <button onClick={this.setSeason3}>Mua Xuan</button>   
                 
                    <button onClick={this.setSeason1}>Mua Thu</button>   
                 
                    <button onClick={this.setSeason2}>Mua He</button>   
                </div>
            </div>
        )
    }
}





const Header = () => {
   
    return (
        <div>
            <Season/>
        </div>
    )
}

export default Header