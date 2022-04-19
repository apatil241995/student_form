import countryUrl from "../../url"
import "./userform.css"
import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  FormGroup,
  MenuItem,
  Menu
} from "@mui/material";
// import { useNavigate } from "react-router-dom";

console.log(countryUrl)
function Userform() {
  const [data_x, setData_x] = useState([]);
  const countrylist = []
  // const navigate = useNavigate();
  const [str, setStr] = useState("")
  const [arr, setArr] = useState([])
  const [name, setName] = useState("");
  const [birth_date, setBirthdate] = useState("")
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [college, setCollege] = useState("")
  const [country, setCountry] = useState("")
  const [hobbies, setHobbies] = useState([])
  const [short_bio, setShortbio] = useState("")
  const [long_bio, setLongbio] = useState("");
  const [handleOthertext, setHandleOthertext] = useState(false)
  const [handleOther, setHandleOther] = useState(true)

  const setEmpty = () => {
    setName("")
    setBirthdate("")
    setMobile("")
    setEmail("")
    setAddress("")
    setGender("")
    setCollege("")
    setCountry("")
    setHobbies("")
    setShortbio("")
    setLongbio("")
  }

  // creating list of countries
  useEffect(() =>
    function ListCountry() {

      const url = "https://restcountries.com/v3.1/all "

      fetch(url).then(function (resp) {
        return resp.json()

      }).then(function (data) {
        setData_x(data)
      })
    }, []

  )

  const list_text = () => {
    for (let i = 0; i < data_x.length; i++) {
      console.log((data_x[i]['name']['common']))
    }
  }


  // adding data to local storage
  const setLocalstorage = (ele) => {
    let userArr = JSON.parse(localStorage.getItem("userList"))

    if (userArr) {
      userArr.push(ele)
      localStorage.setItem("userList", JSON.stringify(userArr))
    } else {
      localStorage.setItem("userList", JSON.stringify([ele]))
    }
  }

  // on submit event handling
  const onSubmitFun = (e) => {
    console.log(arr)
    e.preventDefault()
    setHobbies([...hobbies, arr])
    console.log(hobbies)
    var user = {
      name: name,
      birth_date: birth_date,
      email: email,
      mobile: mobile,
      address: address,
      gender: gender,
      college: college,
      country: country,
      hobbies: hobbies,
      short_bio: short_bio,
      long_bio: long_bio
    }
    setEmpty()

    setLocalstorage(user)

    console.log(user)

  }

  // hobbie check list event handling
  const handleHobbies = (event) => {
    const index = hobbies.indexOf(event.target.value)
    if (index === -1) {
      setHobbies([...hobbies, event.target.value])
    } else {
      setHobbies(hobbies.filter((hobbie) => hobbie !== event.target.value))
    }
  }

  // other functionality for hobbies
  const handleOtherEvent = () => {
    setHandleOthertext(true)
    setHandleOther(false)
  }

  const handleOthertextEvent = (event) => {
    setStr(event.target.value)
    setArr(str.split(","))

  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => { onSubmitFun(e) }}>
        <div className="form-box">
          <TextField id="name" label="Name" variant="outlined" value={name}
            className="form-text-box" onChange={(e) => { setName(e.target.value) }} />

          <TextField id="birth_date" label="Birthdate" variant="outlined" value={birth_date}
            className="form-text-box" onChange={(e) => { setBirthdate(e.target.value) }} />

          <TextField id="mobile" label="Mobile" variant="outlined" value={mobile}
            className="form-text-box" onChange={(e) => { setMobile(e.target.value) }} />

          <TextField id="email" label="Email" variant="outlined" value={email}
            className="form-text-box" onChange={(e) => { setEmail(e.target.value) }} />

          <Box className="form-text-box">
            <FormControl>
              <FormLabel id="gender">
                Gender
              </FormLabel>
              <RadioGroup
                id="gender-choice"
                aria-labelledby="gender"
                value={gender}
                onChange={(e) => { setGender(e.target.value) }}
                row
              >
                <FormControlLabel control={<Radio size="small" />} label="Male" value="Male" />
                <FormControlLabel control={<Radio size="small" />} label="Female" value="Female" />
                <FormControlLabel control={<Radio size="small" />} label="Other" value="Other" />
              </RadioGroup>
            </FormControl>
          </Box>

          <TextField id="address" label="Address" variant="outlined" value={address}
            className="form-text-box" onChange={(e) => { setAddress(e.target.value) }} />

          <TextField id="college" label="College" variant="outlined" value={college}
            className="form-text-box" onChange={(e) => { setCollege(e.target.value) }} />

          <TextField id="country" label="Country" variant="outlined" value={country}
            className="form-text-box" onChange={(e) => { setCountry(e.target.value) }} />

          <box id="hobbies">
            <FormLabel id="hobbies">
              Hobbies
            </FormLabel>
            <FormGroup>
              <FormControlLabel label="Reading"
                value="Reading"
                control={<Checkbox checked={hobbies.includes("Reading")} onChange={handleHobbies} />}
              />
              <FormControlLabel
                label="Gaming"
                value="Gaming"
                control={<Checkbox checked={hobbies.includes("Gaming")} onChange={handleHobbies} />}
              />
              <FormControlLabel
                label="Travling"
                value="Travling"
                control={<Checkbox checked={hobbies.includes("Travling")} onChange={handleHobbies} />}
              />
              <FormControlLabel
                label="Drawing"
                value="Drawing"
                control={<Checkbox checked={hobbies.includes("Drawing")} onChange={handleHobbies} />}
              />
              {
                handleOther ? <FormControlLabel
                  id="other"
                  label="Other"
                  value="Other"
                  control={<Checkbox onChange={handleOtherEvent} />}
                /> : null
              }

            </FormGroup>
          </box>
          {
            handleOthertext ? <TextField id="text" label="Add Hobbies" variant="outlined"
              className="form-text-box text" onChange={handleOthertextEvent} /> : null

          }

          <TextField id="short_bio" label="Short bio" variant="outlined" value={short_bio}
            className="form-text-box" onChange={(e) => { setShortbio(e.target.value) }} />

          <TextField id="long_bio" label="Long Bio" variant="outlined" value={long_bio}
            className="form-text-box" onChange={(e) => { setLongbio(e.target.value) }} />

          <Button variant="contained" color="primary"
            style={{ width: "200px", marginLeft: "auto", marginRight: "auto" }}
            type="submit"

          >
            SUBMIT
          </Button>
          <Button variant="contained" color="primary"
            style={{ width: "200px", marginLeft: "auto", marginRight: "auto" }}
            onClick={list_text}
          >
            list
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Userform;