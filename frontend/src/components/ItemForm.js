import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [bloodtype, setBloodtype] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [nationality, setNationality] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [zip_code, setZipcode] = useState('');
    const [height_CM, setHeight] = useState('');
    const [weight_KG, setWeight] = useState('');
    const [momFN, setMomFirstName] = useState('');
    const [momMN, setMomMiddleName] = useState('');
    const [momLN, setMomLastName] = useState('');
    const [momOcc, setMomOccupation] = useState('');
    const [fathFN, setFathFirstName] = useState('');
    const [fathMN, setFathMiddleName] = useState('');
    const [fathLN, setFathLastName] = useState('');
    const [fathOcc, setFathOccupation] = useState('');
    const [primary, setPrimaryLevel] = useState('');
    const [secondary, setSecondaryLevel] = useState('');
    const [college, setCollegeLevel] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setBirthday(item.birthday);
            setBloodtype(item.bloodtype);
            setAge(item.age);
            setSex(item.Sex);
            setNationality(item.nationality);
            setCivilStatus(item.civil_status);
            setZipcode(item.zip_code);
            setHeight(item.height_CM);
            setWeight(item.weight_KG);
            setMomFirstName(item.momFN);
            setMomMiddleName(item.momMN);
            setMomLastName(item.momLN);
            setMomOccupation(item.momOcc);
            setFathFirstName(item.fathFN);
            setFathMiddleName(item.fathMN);
            setFathLastName(item.fathLN);
            setFathOccupation(item.fathOcc);
            setPrimaryLevel(item.primary);
            setSecondaryLevel(item.secondary);
            setCollegeLevel(item.college);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address,
            email,
            phone,
            birthday,
            bloodtype,
            age,
            sex,
            nationality,
            civil_status,
            zip_code,
            height_CM,
            weight_KG,
            mother_first_name: momFN,
            mother_middle_name: momMN,
            mother_last_name: momLN,
            mother_occupation: momOcc,
            father_first_name: fathFN,
            father_middle_name: fathMN,
            father_last_name: fathLN,
            father_occupation: fathOcc,
            primary,
            secondary,
            college,

        };
        try {
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Contact No.:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Birthday:</label>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={bloodtype} onChange={(e) => setBloodtype(e.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Nationality:</label>
                <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" value={zip_code} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div>
                <label>Height:</label>
                <input type="text" value={height_CM} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" value={weight_KG} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={momFN} onChange={(e) => setMomFirstName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type="text" value={momMN} onChange={(e) => setMomMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Last Name:</label>
                <input type="text" value={momLN} onChange={(e) => setMomLastName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Occupation:</label>
                <input type="text" value={momOcc} onChange={(e) => setMomOccupation(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={fathFN} onChange={(e) => setFathFirstName(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={fathMN} onChange={(e) => setFathMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type="text" value={fathLN} onChange={(e) => setFathLastName(e.target.value)} />
            </div>
            <div>
                <label>Father's Occupation:</label>
                <input type="text" value={fathOcc} onChange={(e) => setFathOccupation(e.target.value)} />
            </div>
            <div>
                <label>Primary Level:</label>
                <input type="text" value={primary} onChange={(e) => setPrimaryLevel(e.target.value)} />
            </div>
            <div>
                <label>Secondary Level:</label>
                <input type="text" value={secondary} onChange={(e) => setSecondaryLevel(e.target.value)} />
            </div>
            <div>
                <label>College Level:</label>
                <input type="text" value={college} onChange={(e) => setCollegeLevel(e.target.value)} />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
       
};
export default ItemForm;