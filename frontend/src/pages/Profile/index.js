import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2} from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

export default function Profile()
{
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    useEffect(() => {
        api.get('profile', {
            headers: {
                Autorizacao: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeletIncident(id)
    {
        try{
            console.log(id);
            await api.delete(`Incidents/${id}`, {
                headers:
                {
                    Autorizacao: ongId,
                }
            });
            setIncidents(incidents.filter(incidents => incidents.id !== id));
        }catch(error) {

        }
    }

    function handleLogout()
    {

        localStorage.clear();
        history.push('/');
        
    }
    return (
    <div className="profile-container">
        <header>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vinda, {ongName}</span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#E02041"/>
            </button>

        </header>
        <h1>Casos cadastrados</h1>
        <ul>

            {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                    <button onClick={() => handleDeletIncident(incident.id)} type ="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            ))}
            
        </ul>
    </div>
    );
}