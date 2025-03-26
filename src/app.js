import React, { useState } from 'react';
import { MapPin, Calendar, Clock, MapIcon, BookOpen, Info, ArrowLeft, ArrowRight, Box } from 'lucide-react';

const MathsAfricainesApp = () => {
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [selectedTab, setSelectedTab] = useState('carte');
  const [animationClass, setAnimationClass] = useState('');
  const [show3DModel, setShow3DModel] = useState(false);

  // Données des artefacts mathématiques africains
  const artifacts = [
    {
      id: 1,
      name: "Bâton d'Ishango",
      location: "République Démocratique du Congo",
      period: "-20000",
      description: "Le premier bâton d'Ishango est un os de babouin avec un quartz taillé, découvert en 1950. Les entailles sur ses colonnes représentent possiblement un système de comptage en base 10. Daté entre 20000 et 25000 ans, il représente l'un des plus anciens témoignages d'activité mathématique au monde.",
      coordinates: { x: 45, y: 55 },
      image: "/api/placeholder/300/200",
      color: "#E57373",
      concept: "Système de comptage",
      significance: "Preuve des connaissances mathématiques très anciennes en Afrique, bien avant la plupart des civilisations connues.",
      has3DModel: true
    },
    {
      id: 2,
      name: "Village Ba-ila",
      location: "Zambie",
      period: "16e siècle",
      description: "Ce village présente une structure fractale : l'ensemble de maisons à la même forme qu'une maison. Cette organisation spatiale démontre l'application intuitive des concepts mathématiques fractals dans l'architecture africaine traditionnelle, bien avant leur découverte formelle en Occident.",
      coordinates: { x: 48, y: 60 },
      image: "/api/placeholder/300/200",
      color: "#64B5F6",
      concept: "Fractales en architecture",
      significance: "Application pratique intuitive des fractales en architecture, témoignant de la sophistication mathématique de ces sociétés."
    },
    {
      id: 3,
      name: "Lamelles de bambou de Tsinghua",
      location: "Chine (liées au commerce africain)",
      period: "-305",
      description: "Les inscriptions sur les lamelles en font la plus ancienne table de multiplication en base 10 connue. Ces artefacts témoignent des échanges mathématiques entre l'Afrique et l'Asie à cette époque, montrant l'influence des systèmes numériques africains sur les civilisations asiatiques.",
      coordinates: { x: 75, y: 40 },
      image: "/api/placeholder/300/200",
      color: "#81C784",
      concept: "Table de multiplication",
      significance: "Témoigne des échanges de connaissances mathématiques entre l'Afrique et l'Asie, et de la diffusion des concepts de base 10."
    },
    {
      id: 4,
      name: "Dessins sur le sable du Vanuatu",
      location: "Vanuatu (influences africaines)",
      period: "Tradition",
      description: "Le dessin est tracé d'un seul trait, sans lever le doigt, créant le nœud de la grille. Cette séquence complexe montre des similarités avec certaines traditions mathématiques d'Afrique de l'Est et démontre la diffusion des concepts topologiques africains vers les îles du Pacifique.",
      coordinates: { x: 85, y: 60 },
      image: "/api/placeholder/300/200",
      color: "#FFB74D",
      concept: "Topologie et tracés continus",
      significance: "Exemple remarquable de l'application intuitive de principes topologiques dans les traditions culturelles."
    },
    {
      id: 5,
      name: "Papyrus de Rhind",
      location: "Égypte",
      period: "-1650",
      description: "Le papyrus de Rhind, recopié en écriture hiératique par le scribe Ahmès, contient 87 problèmes mathématiques et leurs solutions. Il témoigne des connaissances égyptiennes avancées en géométrie et arithmétique, notamment sur les fractions, les divisions, et le calcul de surfaces. Ce document fondamental révèle l'influence des mathématiques égyptiennes sur les civilisations méditerranéennes.",
      coordinates: { x: 55, y: 40 },
      image: "/api/placeholder/300/200",
      color: "#BA68C8",
      concept: "Arithmétique et géométrie appliquées",
      significance: "Document majeur attestant du niveau avancé des mathématiques égyptiennes et de leur impact sur les civilisations méditerranéennes."
    },
    {
      id: 6,
      name: "Système Yoruba",
      location: "Nigeria",
      period: "12e siècle",
      description: "Système de numération vigésimal (base 20) qui a permis des calculs complexes dans le commerce et l'architecture. Les mathématiciens Yoruba développèrent également des méthodes géométriques sophistiquées pour leurs constructions et des algorithmes de calcul remarquablement efficients, influençant durablement les cultures voisines.",
      coordinates: { x: 40, y: 52 },
      image: "/api/placeholder/300/200",
      color: "#4DB6AC",
      concept: "Système de numération vigésimal",
      significance: "Démontre l'efficacité des systèmes numériques alternatifs et l'adaptabilité des principes mathématiques aux besoins culturels spécifiques."
    },
    {
      id: 7,
      name: "Géométrie Dogon",
      location: "Mali",
      period: "10e siècle",
      description: "Les Dogons ont développé un système cosmologique complexe basé sur des principes géométriques avancés. Leurs connaissances astronomiques et leurs représentations spatiales témoignent d'une maîtrise intuitive des concepts géométriques et d'une observation précise des cycles célestes.",
      coordinates: { x: 35, y: 48 },
      image: "/api/placeholder/300/200",
      color: "#FFD54F",
      concept: "Géométrie et astronomie",
      significance: "Intégration de concepts mathématiques avancés dans une vision cosmologique complète, démontrant la sophistication de la pensée scientifique dogon."
    },
  ];

  // Animation lors du changement d'artefact
  const changeArtifact = (artifact) => {
    setAnimationClass('fade-out');
    setShow3DModel(false);
    
    setTimeout(() => {
      setSelectedArtifact(artifact);
      setAnimationClass('fade-in');
    }, 300);
  };
  
  // Intégration Sketchfab pour les modèles 3D
  const renderSketchfabModel = () => {
    // Différents modèles Sketchfab pour chaque artefact
    const modelMapping = {
      1: "https://sketchfab.com/models/7e82c8698f0243c4bd16ae2f6b18d7a6/embed", // Bâton d'Ishango (exemple)
      6: "https://sketchfab.com/models/1c3f87ed525340b1a53ab79a5f24b951/embed"  // Autre modèle (exemple)
    };

    const modelUrl = modelMapping[selectedArtifact.id] || "";
    
    return (
      <div className="w-full h-full">
        <iframe 
          title={`Modèle 3D de ${selectedArtifact.name}`}
          width="100%" 
          height="300" 
          src={modelUrl}
          frameBorder="0" 
          allow="autoplay; fullscreen; vr" 
          mozallowfullscreen="true" 
          webkitallowfullscreen="true"
          className="w-full h-full"
        ></iframe>
      </div>
    );
  };

  // Navigation entre les artefacts
  const navigateArtifact = (direction) => {
    if (!selectedArtifact) return;
    
    const currentIndex = artifacts.findIndex(a => a.id === selectedArtifact.id);
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = artifacts.length - 1;
    if (newIndex >= artifacts.length) newIndex = 0;
    
    changeArtifact(artifacts[newIndex]);
  };

  // Rendu de la frise chronologique
  const renderTimeline = () => {
    // Calculer les années min et max pour notre échelle
    const minYear = -25000;
    const maxYear = 2000;
    const range = maxYear - minYear;

    // Fonction pour calculer la position horizontale en pourcentage
    const calculatePosition = (year) => {
      const numYear = parseInt(year);
      return ((numYear - minYear) / range) * 100;
    };

    return (
      <div className="relative h-40 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl mt-4 overflow-hidden shadow-inner">
        <div className="absolute bottom-0 w-full h-1 bg-gray-400"></div>
        
        {/* Époques historiques */}
        <div className="absolute bottom-16 w-full flex text-xs">
          <div className="w-1/5 text-center opacity-60 font-semibold text-purple-800">Paléolithique</div>
          <div className="w-1/5 text-center opacity-60 font-semibold text-blue-800">Néolithique</div>
          <div className="w-1/5 text-center opacity-60 font-semibold text-teal-800">Âge du Bronze</div>
          <div className="w-1/5 text-center opacity-60 font-semibold text-green-800">Antiquité</div>
          <div className="w-1/5 text-center opacity-60 font-semibold text-amber-800">Ère Moderne</div>
        </div>
        
        {/* Marqueurs principaux */}
        <div className="absolute bottom-1 left-0 h-3 w-0.5 bg-gray-600"></div>
        <div className="absolute bottom-1 text-xs text-gray-600" style={{ left: '0%', transform: 'translateX(-50%)' }}>-25000</div>
        
        <div className="absolute bottom-1 h-3 w-0.5 bg-gray-600" style={{ left: '20%' }}></div>
        <div className="absolute bottom-1 text-xs text-gray-600" style={{ left: '20%', transform: 'translateX(-50%)' }}>-20000</div>
        
        <div className="absolute bottom-1 h-3 w-0.5 bg-gray-600" style={{ left: '40%' }}></div>
        <div className="absolute bottom-1 text-xs text-gray-600" style={{ left: '40%', transform: 'translateX(-50%)' }}>-15000</div>
        
        <div className="absolute bottom-1 h-3 w-0.5 bg-gray-600" style={{ left: '60%' }}></div>
        <div className="absolute bottom-1 text-xs text-gray-600" style={{ left: '60%', transform: 'translateX(-50%)' }}>-10000</div>
        
        <div className="absolute bottom-1 h-3 w-0.5 bg-gray-600" style={{ left: '80%' }}></div>
        <div className="absolute bottom-1 text-xs text-gray-600" style={{ left: '80%', transform: 'translateX(-50%)' }}>-5000</div>
        
        <div className="absolute bottom-1 h-3 w-0.5 bg-gray-600" style={{ left: '95%' }}></div>
        <div className="absolute bottom-1 text-xs text-gray-600" style={{ left: '95%', transform: 'translateX(-50%)' }}>0</div>
        
        <div className="absolute bottom-1 h-3 w-0.5 bg-gray-600" style={{ left: '99%' }}></div>
        <div className="absolute bottom-1 text-xs text-gray-600" style={{ left: '99%', transform: 'translateX(-50%)' }}>2000</div>

        {/* Points pour chaque artefact */}
        {artifacts.map((artifact) => {
          const position = calculatePosition(artifact.period);
          return (
            <div 
              key={artifact.id}
              className={`absolute bottom-5 cursor-pointer transition-all duration-300 ${selectedArtifact?.id === artifact.id ? 'scale-125' : ''}`} 
              style={{ left: `${position}%` }}
              onClick={() => changeArtifact(artifact)}
            >
              <div className="flex flex-col items-center">
                <div 
                  className={`h-5 w-5 rounded-full shadow-md border-2 border-white transition-all duration-300 ${selectedArtifact?.id === artifact.id ? 'animate-pulse' : ''}`}
                  style={{ backgroundColor: artifact.color }}
                ></div>
                {selectedArtifact?.id === artifact.id && (
                  <div className="absolute bottom-6 bg-white p-2 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap z-10" style={{ borderLeft: `3px solid ${artifact.color}` }}>
                    {artifact.name} ({artifact.period})
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Rendu de la carte
  const renderMap = () => {
    return (
      <div className="relative h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl mt-4 overflow-hidden border border-blue-100 shadow-inner">
        {/* Silhouette stylisée de l'Afrique avec des détails */}
        <div className="absolute w-full h-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Fond de carte avec texture */}
            <defs>
              <pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse">
                <path d="M 2 0 L 0 0 0 2" fill="none" stroke="#e6f7ff" strokeWidth="0.2"/>
              </pattern>
            </defs>
            
            {/* Contours océaniques */}
            <path 
              d="M0,0 L100,0 L100,100 L0,100 Z" 
              fill="#f0f9ff" 
            />
            
            {/* Silhouette de l'Afrique */}
            <path 
              d="M45,20 Q60,15 65,30 Q75,35 75,45 Q80,55 70,65 Q65,70 60,75 Q55,85 45,85 Q35,83 30,75 Q25,70 20,60 Q15,50 25,40 Q30,30 45,20 Z" 
              fill="url(#grid)" 
              stroke="#64b5f6" 
              strokeWidth="0.8"
            />
            
            {/* Détails topographiques */}
            <path 
              d="M30,30 Q40,35 45,50 Q35,65 30,60 Q25,50 30,30 Z" 
              fill="none" 
              stroke="#90caf9" 
              strokeWidth="0.3"
            />
            <path 
              d="M55,40 Q65,45 60,60 Q50,65 55,40 Z" 
              fill="none" 
              stroke="#90caf9" 
              strokeWidth="0.3"
            />
            
            {/* Grands fleuves */}
            <path 
              d="M50,30 Q55,40 50,50 Q45,60 50,70" 
              fill="none" 
              stroke="#64b5f6" 
              strokeWidth="0.5"
              strokeDasharray="0.5,0.5"
            />
            <path 
              d="M30,40 Q40,45 45,50" 
              fill="none" 
              stroke="#64b5f6" 
              strokeWidth="0.5"
              strokeDasharray="0.5,0.5"
            />
          </svg>
          
          {/* Légende de la carte */}
          <div className="absolute top-2 left-2 bg-white bg-opacity-80 p-2 rounded-lg shadow-sm text-xs z-10">
            <div className="font-semibold mb-1 text-blue-900">Régions Mathématiques</div>
            <div className="flex items-center text-gray-700">
              <div className="h-3 w-3 rounded-full bg-red-400 mr-1"></div>
              <span>Numérique</span>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="h-3 w-3 rounded-full bg-green-400 mr-1"></div>
              <span>Géométrique</span>
            </div>
            <div className="flex items-center text-gray-700">
              <div className="h-3 w-3 rounded-full bg-purple-400 mr-1"></div>
              <span>Algébrique</span>
            </div>
          </div>
          
          {/* Points pour chaque artefact */}
          {artifacts.map((artifact) => (
            <div 
              key={artifact.id}
              className="absolute transition-all duration-300" 
              style={{ 
                left: `${artifact.coordinates.x}%`, 
                top: `${artifact.coordinates.y}%`, 
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => changeArtifact(artifact)}
            >
              <div 
                className={`cursor-pointer p-1 rounded-full shadow-md transition-transform duration-300 border-2 border-white ${selectedArtifact?.id === artifact.id ? 'animate-pulse scale-125' : ''}`}
                style={{ backgroundColor: artifact.color }}
              >
                <MapPin size={16} className="text-white" />
              </div>
              {selectedArtifact?.id === artifact.id && (
                <div className="absolute top-6 left-0 bg-white p-2 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap z-10" style={{ borderLeft: `3px solid ${artifact.color}` }}>
                  {artifact.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-xl shadow-xl p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Mathématiques Africaines à Travers l'Histoire
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explorez l'histoire riche et méconnue des mathématiques africaines, de la préhistoire à nos jours, 
          à travers des artefacts et traditions qui ont façonné notre compréhension des nombres.
        </p>
      </div>
      
      {/* Onglets stylisés */}
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-full shadow-md p-1 flex">
          <button 
            className={`px-6 py-2 rounded-full flex items-center ${selectedTab === 'carte' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-sm' 
              : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setSelectedTab('carte')}
          >
            <MapIcon size={16} className="mr-2" />
            Carte
          </button>
          <button 
            className={`px-6 py-2 rounded-full flex items-center ${selectedTab === 'chronologie' 
              ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium shadow-sm' 
              : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setSelectedTab('chronologie')}
          >
            <Calendar size={16} className="mr-2" />
            Chronologie
          </button>
        </div>
      </div>
      
      {/* Contenu des onglets */}
      {selectedTab === 'carte' ? renderMap() : renderTimeline()}
      
      {/* Détails de l'artefact sélectionné */}
      {selectedArtifact && (
        <div className={`mt-6 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${animationClass}`}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              {selectedArtifact.has3DModel && show3DModel ? (
                <div className="relative" style={{height: "300px"}}>
                  {renderSketchfabModel()}
                  <button 
                    className="absolute top-2 right-2 bg-white bg-opacity-80 p-2 rounded-full shadow-md z-20"
                    onClick={() => setShow3DModel(false)}
                  >
                    <img src={selectedArtifact.image} alt="Voir image" className="w-6 h-6 rounded-full object-cover" />
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-70" style={{ backgroundColor: selectedArtifact.color }}></div>
                  <img 
                    src={selectedArtifact.image} 
                    alt={selectedArtifact.name}
                    className="w-full h-full object-cover relative z-10 mix-blend-overlay"
                  />
                  {selectedArtifact.has3DModel && (
                    <button 
                      className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md z-20 hover:bg-blue-50"
                      onClick={() => setShow3DModel(true)}
                    >
                      <Box size={20} className="text-blue-600" />
                    </button>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 text-white">
                    <h2 className="text-xl font-bold">{selectedArtifact.name}</h2>
                    <div className="flex items-center text-xs mt-1">
                      <MapPin size={12} className="mr-1" />
                      <span className="mr-3">{selectedArtifact.location}</span>
                      <Clock size={12} className="mr-1" />
                      <span>{selectedArtifact.period}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:w-3/5 p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: selectedArtifact.color }}></div>
                <span className="font-medium text-sm" style={{ color: selectedArtifact.color }}>{selectedArtifact.concept}</span>
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{selectedArtifact.description}</p>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Info size={14} className="mr-2" />
                  Importance Historique
                </div>
                <p className="text-gray-600 text-sm italic">{selectedArtifact.significance}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button 
                  className="flex items-center text-blue-500 hover:text-blue-700"
                  onClick={() => navigateArtifact(-1)}
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Précédent
                </button>
                <button 
                  className="flex items-center text-blue-500 hover:text-blue-700"
                  onClick={() => navigateArtifact(1)}
                >
                  Suivant
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {!selectedArtifact && (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-lg text-center">
          <div className="inline-block p-4 rounded-full bg-blue-100 mb-3">
            <BookOpen size={24} className="text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Découvrez le patrimoine mathématique africain</h3>
          <p className="text-gray-600">
            Sélectionnez un point sur la carte ou la chronologie pour explorer l'histoire fascinante 
            des mathématiques africaines et leur influence sur le monde.
          </p>
        </div>
      )}
      
      <div className="mt-8 flex justify-center items-center text-xs text-gray-500 space-x-3">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-medium">
          Exposition "Mathématiques et Culture Africaine"
        </div>
        <div className="h-1 w-1 rounded-full bg-gray-300"></div>
        <div>© 2025</div>
      </div>
      
      {/* Style pour les animations */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in forwards;
        }
        .fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default MathsAfricainesApp;
