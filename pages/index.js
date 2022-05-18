import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MadresYFamiliaresLogo from '../public/images/icons/logo_madres.svg';
import styles from '../styles/Home.module.css';

import AguirreMaRosa from '../public/images/baja/Aguirre Ma Rosa_baja.jpeg';
import AlfaroDaniel from '../public/images/baja/Alfaro Daniel_baja.jpeg';
import AltarmiranoRicardo from '../public/images/baja/Altarmirano Ricardo_baja.jpeg';
import AltmanBlanca from '../public/images/baja/Altman Blanca_baja.jpeg';
import AngletBeatriz from '../public/images/baja/Anglet Beatriz_baja.jpeg';
import ArceGustavo from '../public/images/baja/Arce Gustavo_baja.jpeg';
import ArcosAriel from '../public/images/baja/Arcos Ariel_baja.jpeg';
import ArevaloCarlos from '../public/images/baja/Arevalo Carlos_baja.jpeg';
import ArigonLuis from '../public/images/baja/Arigon Luis_baja.jpeg';
import ArnoneBernardo from '../public/images/baja/Arnone Bernardo_baja.jpeg';
import ArocenaIgnacio from '../public/images/baja/Arocena Ignacio_baja.jpeg';
import ArocenaMarcos from '../public/images/baja/Arocena Marcos_baja.jpeg';
import ArpinoJose from '../public/images/baja/Arpino Jose_baja.jpeg';
import ArtigasMaAsuncion from '../public/images/baja/Artigas Ma Asuncion_baja.jpeg';
import AyalaAbel from '../public/images/baja/Ayala Abel_baja.jpeg';
import BalinasOscar from '../public/images/baja/Balinas Oscar_baja.jpeg';
import BarbozaJoseLuis from '../public/images/baja/Barboza Jose Luis_baja.jpeg';
import BarretoRaul from '../public/images/baja/Barreto Raul_baja.jpeg';
import BarrientosCarolina from '../public/images/baja/Barrientos Carolina_baja.jpeg';
import BarriosWashington from '../public/images/baja/Barrios Washington_baja.jpeg';
import BasualdoGraciela from '../public/images/baja/Basualdo Graciela_baja.jpeg';
import BellizziAndres from '../public/images/baja/Bellizzi Andres_baja.jpeg';
import BenarroyoMonica from '../public/images/baja/Benarroyo Monica_baja.jpeg';
import BenassiMaCatalina from '../public/images/baja/Benassi Ma Catalina_baja.jpeg';
import BentancourRutilo from '../public/images/baja/Bentancour Rutilo_baja.jpeg';
import BentancourWalner from '../public/images/baja/Bentancour Walner_baja.jpeg';
import BlancoRicardo from '../public/images/baja/Blanco Ricardo_baja.jpeg';
import BleierEduardo from '../public/images/baja/Bleier Eduardo_baja.jpeg';
import BonavitaCarlos from '../public/images/baja/Bonavita Carlos_baja.jpeg';
import BorelliRaul from '../public/images/baja/Borelli Raul_baja.jpeg';
import BoscoAlfredo from '../public/images/baja/Bosco Alfredo_baja.jpeg';
import BriebaJuanManuel from '../public/images/baja/Brieba Juan Manuel_baja.jpeg';
import BurguenoAdaMargaret from '../public/images/baja/Burgueno Ada Margaret_baja.jpeg';
import CabezudoCarlos from '../public/images/baja/Cabezudo Carlos_baja.jpeg';
import CabreraAry from '../public/images/baja/Cabrera Ary_baja.jpeg';
import CacciavillianiHugo from '../public/images/baja/Cacciavilliani Hugo_baja.jpeg';
import CaitanoJoseEnrique from '../public/images/baja/Caitano Jose Enrique_baja.jpeg';
import CallabaJosePedro from '../public/images/baja/Callaba Jose Pedro_baja.jpeg';
import CamachoLuisAlberto from '../public/images/baja/Camacho Luis Alberto_baja.jpeg';
import CamiouMaMercedes from '../public/images/baja/Camiou Ma Mercedes_baja.jpeg';
import CandiaFranisco from '../public/images/baja/Candia Franisco_baja.jpeg';
import CanteroEdison from '../public/images/baja/Cantero Edison_baja.jpeg';
import CarneiroAndres from '../public/images/baja/Carneiro Andres_baja.jpeg';
import CarreteroMadelRosario from '../public/images/baja/Carretero Ma del Rosario_baja.jpeg';
import CarvalhoLuisAlberto from '../public/images/baja/Carvalho Luis Alberto_baja.jpeg';
import CascoYolanda from '../public/images/baja/Casco Yolanda_baja.jpeg';
import CastagnettoHector from '../public/images/baja/Castagnetto Hector_baja.jpeg';
import CastagnoAnibal from '../public/images/baja/Castagno Anibal_baja.jpeg';
import CastilloAtalivas from '../public/images/baja/Castillo Atalivas_baja.jpeg';
import CastroJulio from '../public/images/baja/Castro Julio_baja.jpeg';
import CastroMaAntonia from '../public/images/baja/Castro Ma Antonia_baja.jpeg';
import CastroRoberto from '../public/images/baja/Castro Roberto_baja.jpeg';
import CendanJuanAngel from '../public/images/baja/Cendan Juan Angel_baja.jpeg';
import ChavesUbagesner from '../public/images/baja/Chaves Ubagesner_baja.jpeg';
import ChegenianSegundo from '../public/images/baja/Chegenian Segundo_baja.jpeg';
import ChizzolaEduardo from '../public/images/baja/Chizzola Eduardo_baja.jpeg';
import CorchsAlberto from '../public/images/baja/Corchs Alberto_baja.jpeg';
import CorreaJulio from '../public/images/baja/Correa Julio_baja.jpeg';
import CramWashington from '../public/images/baja/Cram Washington_baja.jpeg';
import CruzMario from '../public/images/baja/Cruz Mario_baja.jpeg';
import CubasOmar from '../public/images/baja/Cubas Omar_baja.jpeg';
import DaSilveiraGraciela from '../public/images/baja/Da Silveira Graciela_baja.jpeg';
import DeGouveiaGraciela from '../public/images/baja/De Gouveia Graciela_baja.jpeg';
import DeGregorioOscar from '../public/images/baja/De Gregorio Oscar_baja.jpeg';
import DeLeonJuan from '../public/images/baja/De Leon Juan_baja.jpeg';
import DelFabroEduardo from '../public/images/baja/Del Fabro Eduardo_baja.jpeg';
import DeliaJulioCesar from '../public/images/baja/Delia Julio Cesar_baja.jpeg';
import DelpinoJupiter from '../public/images/baja/Delpino Jupiter_baja.jpeg';
import DerganNatalio from '../public/images/baja/Dergan Natalio_baja.jpeg';
import DiazFernando from '../public/images/baja/Diaz Fernando_baja.jpeg';
import DossettiEdmundo from '../public/images/baja/Dossetti Edmundo_baja.jpeg';
import DuarteLeon from '../public/images/baja/Duarte Leon_baja.jpeg';
import EpelbaumClaudio from '../public/images/baja/Epelbaum Claudio_baja.jpeg';
import EpelbaumLila from '../public/images/baja/Epelbaum Lila_baja.jpeg';
import ErrandoneaJuanPablo from '../public/images/baja/Errandonea Juan Pablo_baja.jpeg';
import EscuderoJulio from '../public/images/baja/Escudero Julio_baja.jpeg';
import FernandezElsa from '../public/images/baja/Fernandez Elsa_baja.jpeg';
import FernandezJuanGuillermo from '../public/images/baja/Fernandez Juan Guillermo_baja.jpeg';
import FernandezJulioCesar from '../public/images/baja/Fernandez Julio Cesar_baja.jpeg';
import FilipazziRafaela from '../public/images/baja/Filipazzi Rafaela_baja.jpeg';
import FontelaAlberto from '../public/images/baja/Fontela Alberto_baja.jpeg';
import GadeaNelsa from '../public/images/baja/Gadea Nelsa_baja.jpeg';
import GalloEduardo from '../public/images/baja/Gallo Eduardo_baja.jpeg';
import GambaroRaul from '../public/images/baja/Gambaro Raul_baja.jpeg';
import GandaraElba from '../public/images/baja/Gandara Elba_baja.jpeg';
import GarciaGerman from '../public/images/baja/Garcia German_baja.jpeg';
import GarciaIleana from '../public/images/baja/Garcia Ileana_baja.jpeg';
import GarciaMaClaudia from '../public/images/baja/Garcia Ma Claudia_baja.jpeg';
import GarciaManuel from '../public/images/baja/Garcia Manuel_baja.jpeg';
import GarreiroElsa from '../public/images/baja/Garreiro Elsa_baja.jpeg';
import GattiAdriana from '../public/images/baja/Gatti Adriana_baja.jpeg';
import GattiGerardo from '../public/images/baja/Gatti Gerardo_baja.jpeg';
import GelosHoracio from '../public/images/baja/Gelos Horacio_baja.jpeg';
import GelpiLeonardo from '../public/images/baja/Gelpi Leonardo_baja.jpeg';
import GersbergEsther from '../public/images/baja/Gersberg Esther_baja.jpeg';
import GiordanoHector from '../public/images/baja/Giordano Hector_baja.jpeg';
import GomensoroHugo from '../public/images/baja/Gomensoro Hugo_baja.jpeg';
import GomensoroRoberto from '../public/images/baja/Gomensoro Roberto_baja.jpeg';
import GomezCelica from '../public/images/baja/Gomez Celica_baja.jpeg';
import GoncalvezJorge from '../public/images/baja/Goncalvez Jorge_baja.jpeg';
import GoniDarioGilberto from '../public/images/baja/Goni Dario Gilberto_baja.jpeg';
import GonzalezLuisEduardo from '../public/images/baja/Gonzalez Luis Eduardo_baja.jpeg';
import GonzalezNelson from '../public/images/baja/Gonzalez Nelson_baja.jpeg';
import GoycoecheaGustavo from '../public/images/baja/Goycoechea Gustavo_baja.jpeg';
import GrinsponMonica from '../public/images/baja/Grinspon Monica_baja.jpeg';
import GrisonasVictoria from '../public/images/baja/Grisonas Victoria_baja.jpeg';
import GuazCarlos from '../public/images/baja/Guaz Carlos_baja.jpeg';
import HernandezCarlos from '../public/images/baja/Hernandez Carlos_baja.jpeg';
import HernandezHobbasBeatriz from '../public/images/baja/Hernandez Hobbas Beatriz_baja.jpeg';
import HernandezHobbasWashington from '../public/images/baja/Hernandez Hobbas Washington_baja.jpeg';
import HernandezJorge from '../public/images/baja/Hernandez Jorge_baja.jpeg';
import HobbasLourdes from '../public/images/baja/Hobbas Lourdes_baja.jpeg';
import IbarbiaMaAngelica from '../public/images/baja/Ibarbia Ma Angelica_baja.jpeg';
import InsaustiJuanCarlos from '../public/images/baja/Insausti Juan Carlos_baja.jpeg';
import InzaurralddeGustavo from '../public/images/baja/Inzaurraldde Gustavo_baja.jpeg';
import IslasMaEmilia from '../public/images/baja/Islas Ma Emilia_baja.jpeg';
import JulienMario from '../public/images/baja/Julien Mario_baja.jpeg';
import KeimJosefina from '../public/images/baja/Keim Josefina_baja.jpeg';
import LemaMiguelAngel from '../public/images/baja/Lema Miguel Angel_baja.jpeg';
import LerenaElena from '../public/images/baja/Lerena Elena_baja.jpeg';
import LezamaRafael from '../public/images/baja/Lezama Rafael_baja.jpeg';
import LiberoffManuel from '../public/images/baja/Liberoff Manuel_baja.jpeg';
import LogaresClaudio from '../public/images/baja/Logares Claudio_baja.jpeg';
import LopezArazati from '../public/images/baja/Lopez Arazati_baja.jpeg';
import LucasEnrique from '../public/images/baja/Lucas Enrique_baja.jpeg';
import LuppiMary from '../public/images/baja/Luppi Mary_baja.jpeg';
import MachadoHumberto from '../public/images/baja/Machado Humberto_baja.jpeg';
import MaidanaFelix from '../public/images/baja/Maidana Felix_baja.jpeg';
import MartinezFernando from '../public/images/baja/Martinez Fernando_baja.jpeg';
import MartinezJorge from '../public/images/baja/Martinez Jorge_baja.jpeg';
import MartinezJose from '../public/images/baja/Martinez Jose_baja.jpeg';
import MatoMiguel from '../public/images/baja/Mato Miguel_baja.jpeg';
import MazzuchiWinston from '../public/images/baja/Mazzuchi Winston_baja.jpeg';
import MechosoAlberto from '../public/images/baja/Mechoso Alberto_baja.jpeg';
import MeloCuestaNebio from '../public/images/baja/Melo Cuesta Nebio_baja.jpeg';
import MendezHugo from '../public/images/baja/Mendez Hugo_baja.jpeg';
import MicheffJuan from '../public/images/baja/Micheff Juan_baja.jpeg';
import MichelenaEnrique from '../public/images/baja/Michelena Enrique_baja.jpeg';
import MirandaFernando from '../public/images/baja/Miranda Fernando_baja.jpeg';
import MirandaUrano from '../public/images/baja/Miranda Urano_baja.jpeg';
import ModernellCarlos from '../public/images/baja/Modernell Carlos_baja.jpeg';
import MontesdeOcaOtermin from '../public/images/baja/Montes de Oca Otermin_baja.jpeg';
import MoralesJuan from '../public/images/baja/Morales Juan_baja.jpeg';
import MorenoMiguel from '../public/images/baja/Moreno Miguel_baja.jpeg';
import MoyanoAlfredo from '../public/images/baja/Moyano Alfredo_baja.jpeg';
import OliveraRaulPedro from '../public/images/baja/Olivera Raul Pedro_baja.jpeg';
import OneilEduardo from '../public/images/baja/Oneil Eduardo_baja.jpeg';
import OrtizFelix from '../public/images/baja/Ortiz Felix_baja.jpeg';
import OsorioPablo from '../public/images/baja/Osorio Pablo_baja.jpeg';
import PacielloAsdrubal from '../public/images/baja/Paciello Asdrubal_baja.jpeg';
import PagardoyEnrique from '../public/images/baja/Pagardoy Enrique_baja.jpeg';
import PaittaAntonioOmar from '../public/images/baja/Paitta Antonio Omar_baja.jpeg';
import PedreiraJorge from '../public/images/baja/Pedreira Jorge_baja.jpeg';
import PeluaJoseLuis from '../public/images/baja/Pelua Jose Luis_baja.jpeg';
import PeluaMartin from '../public/images/baja/Pelua Martin_baja.jpeg';
import PereiraRenee from '../public/images/baja/Pereira Renee_baja.jpeg';
import PerezEduardo from '../public/images/baja/Perez Eduardo_baja.jpeg';
import PotenzaJose from '../public/images/baja/Potenza Jose_baja.jpeg';
import PovaschukJuan from '../public/images/baja/Povaschuk Juan_baja.jpeg';
import PrietoRuben from '../public/images/baja/Prieto Ruben_baja.jpeg';
import QueiroWashington from '../public/images/baja/Queiro Washington_baja.jpeg';
import QuinonesModesto from '../public/images/baja/Quinones Modesto_baja.jpeg';
import QuinterosElena from '../public/images/baja/Quinteros Elena_baja.jpeg';
import RainaCarlos from '../public/images/baja/Raina Carlos_baja.jpeg';
import RandoFrancisco from '../public/images/baja/Rando Francisco_baja.jpeg';
import RecagnoJuanPablo from '../public/images/baja/Recagno Juan Pablo_baja.jpeg';
import RioMiguelAngel from '../public/images/baja/Rio Miguel Angel_baja.jpeg';
import RodriguezBlanca from '../public/images/baja/Rodriguez Blanca_baja.jpeg';
import RodriguezCarlos from '../public/images/baja/Rodriguez Carlos_baja.jpeg';
import RodriguezEver from '../public/images/baja/Rodriguez Ever_baja.jpeg';
import RodriguezFelix from '../public/images/baja/Rodriguez Felix_baja.jpeg';
import RodriguezJulio from '../public/images/baja/Rodriguez Julio_baja.jpeg';
import SanjurjoAmelia from '../public/images/baja/Sanjurjo Amelia_baja.jpeg';
import SantanaNelson from '../public/images/baja/Santana Nelson_baja.jpeg';
import SanzAida from '../public/images/baja/Sanz Aida_baja.jpeg';
import ScopiseNorma from '../public/images/baja/Scopise Norma_baja.jpeg';
import SenaOlivar from '../public/images/baja/Sena Olivar_baja.jpeg';
import SerraHelios from '../public/images/baja/Serra Helios_baja.jpeg';
import SeveroAry from '../public/images/baja/Severo Ary_baja.jpeg';
import SeveroCarlos from '../public/images/baja/Severo Carlos_baja.jpeg';
import SeveroMarta from '../public/images/baja/Severo Marta_baja.jpeg';
import SilvaKleber from '../public/images/baja/Silva Kleber_baja.jpeg';
import SilveiraMaRosa from '../public/images/baja/Silveira Ma Rosa_baja.jpeg';
import SobaAdalberto from '../public/images/baja/Soba Adalberto_baja.jpeg';
import SobrinoGuillermo from '../public/images/baja/Sobrino Guillermo_baja.jpeg';
import SocaJuan from '../public/images/baja/Soca Juan_baja.jpeg';
import SosaValdezLujan from '../public/images/baja/Sosa Valdez Lujan_baja.jpeg';
import StromanAdolfo from '../public/images/baja/Stroman Adolfo_baja.jpeg';
import TassinoOscar from '../public/images/baja/Tassino Oscar_baja.jpeg';
import TejeraRaul from '../public/images/baja/Tejera Raul_baja.jpeg';
import TriasCecilia from '../public/images/baja/Trias Cecilia_baja.jpeg';
import TrinidadLiver from '../public/images/baja/Trinidad Liver_baja.jpeg';
import UrtasunJoseLuis from '../public/images/baja/Urtasun Jose Luis_baja.jpeg';
import VillaflorRaimundo from '../public/images/baja/Villaflor Raimundo_baja.jpeg';
import WurmWilhelm from '../public/images/baja/Wurm Wilhelm_baja.jpeg';
import ZaffaroniJorge from '../public/images/baja/Zaffaroni Jorge_baja.jpeg';
import ZuazuMaNieves from '../public/images/baja/Zuazu Ma Nieves_baja.jpeg';

const images = [<Link key="Aguirre Ma Rosa" href="AguirreMaRosa"><Image placeholder="blur" src={AguirreMaRosa} alt="Imagen de Aguirre Ma Rosa" /></Link>, <Link key="Alfaro Daniel" href="AlfaroDaniel"><Image placeholder="blur" src={AlfaroDaniel} alt="Imagen de Alfaro Daniel" /></Link>, <Link key="Altarmirano Ricardo" href="AltarmiranoRicardo"><Image placeholder="blur" src={AltarmiranoRicardo} alt="Imagen de Altarmirano Ricardo" /></Link>, <Link key="Altman Blanca" href="AltmanBlanca"><Image placeholder="blur" src={AltmanBlanca} alt="Imagen de Altman Blanca" /></Link>, <Link key="Anglet Beatriz" href="AngletBeatriz"><Image placeholder="blur" src={AngletBeatriz} alt="Imagen de Anglet Beatriz" /></Link>, <Link key="Arce Gustavo" href="ArceGustavo"><Image placeholder="blur" src={ArceGustavo} alt="Imagen de Arce Gustavo" /></Link>, <Link key="Arcos Ariel" href="ArcosAriel"><Image placeholder="blur" src={ArcosAriel} alt="Imagen de Arcos Ariel" /></Link>, <Link key="Arevalo Carlos" href="ArevaloCarlos"><Image placeholder="blur" src={ArevaloCarlos} alt="Imagen de Arevalo Carlos" /></Link>, <Link key="Arigon Luis" href="ArigonLuis"><Image placeholder="blur" src={ArigonLuis} alt="Imagen de Arigon Luis" /></Link>, <Link key="Arnone Bernardo" href="ArnoneBernardo"><Image placeholder="blur" src={ArnoneBernardo} alt="Imagen de Arnone Bernardo" /></Link>, <Link key="Arocena Ignacio" href="ArocenaIgnacio"><Image placeholder="blur" src={ArocenaIgnacio} alt="Imagen de Arocena Ignacio" /></Link>, <Link key="Arocena Marcos" href="ArocenaMarcos"><Image placeholder="blur" src={ArocenaMarcos} alt="Imagen de Arocena Marcos" /></Link>, <Link key="Arpino Jose" href="ArpinoJose"><Image placeholder="blur" src={ArpinoJose} alt="Imagen de Arpino Jose" /></Link>, <Link key="Artigas Ma Asuncion" href="ArtigasMaAsuncion"><Image placeholder="blur" src={ArtigasMaAsuncion} alt="Imagen de Artigas Ma Asuncion" /></Link>, <Link key="Ayala Abel" href="AyalaAbel"><Image placeholder="blur" src={AyalaAbel} alt="Imagen de Ayala Abel" /></Link>, <Link key="Balinas Oscar" href="BalinasOscar"><Image placeholder="blur" src={BalinasOscar} alt="Imagen de Balinas Oscar" /></Link>, <Link key="Barboza Jose Luis" href="BarbozaJoseLuis"><Image placeholder="blur" src={BarbozaJoseLuis} alt="Imagen de Barboza Jose Luis" /></Link>, <Link key="Barreto Raul" href="BarretoRaul"><Image placeholder="blur" src={BarretoRaul} alt="Imagen de Barreto Raul" /></Link>, <Link key="Barrientos Carolina" href="BarrientosCarolina"><Image placeholder="blur" src={BarrientosCarolina} alt="Imagen de Barrientos Carolina" /></Link>, <Link key="Barrios Washington" href="BarriosWashington"><Image placeholder="blur" src={BarriosWashington} alt="Imagen de Barrios Washington" /></Link>, <Link key="Basualdo Graciela" href="BasualdoGraciela"><Image placeholder="blur" src={BasualdoGraciela} alt="Imagen de Basualdo Graciela" /></Link>, <Link key="Bellizzi Andres" href="BellizziAndres"><Image placeholder="blur" src={BellizziAndres} alt="Imagen de Bellizzi Andres" /></Link>, <Link key="Benarroyo Monica" href="BenarroyoMonica"><Image placeholder="blur" src={BenarroyoMonica} alt="Imagen de Benarroyo Monica" /></Link>, <Link key="Benassi Ma Catalina" href="BenassiMaCatalina"><Image placeholder="blur" src={BenassiMaCatalina} alt="Imagen de Benassi Ma Catalina" /></Link>, <Link key="Bentancour Rutilo" href="BentancourRutilo"><Image placeholder="blur" src={BentancourRutilo} alt="Imagen de Bentancour Rutilo" /></Link>, <Link key="Bentancour Walner" href="BentancourWalner"><Image placeholder="blur" src={BentancourWalner} alt="Imagen de Bentancour Walner" /></Link>, <Link key="Blanco Ricardo" href="BlancoRicardo"><Image placeholder="blur" src={BlancoRicardo} alt="Imagen de Blanco Ricardo" /></Link>, <Link key="Bleier Eduardo" href="BleierEduardo"><Image placeholder="blur" src={BleierEduardo} alt="Imagen de Bleier Eduardo" /></Link>, <Link key="Bonavita Carlos" href="BonavitaCarlos"><Image placeholder="blur" src={BonavitaCarlos} alt="Imagen de Bonavita Carlos" /></Link>, <Link key="Borelli Raul" href="BorelliRaul"><Image placeholder="blur" src={BorelliRaul} alt="Imagen de Borelli Raul" /></Link>, <Link key="Bosco Alfredo" href="BoscoAlfredo"><Image placeholder="blur" src={BoscoAlfredo} alt="Imagen de Bosco Alfredo" /></Link>, <Link key="Brieba Juan Manuel" href="BriebaJuanManuel"><Image placeholder="blur" src={BriebaJuanManuel} alt="Imagen de Brieba Juan Manuel" /></Link>, <Link key="Burgueno Ada Margaret" href="BurguenoAdaMargaret"><Image placeholder="blur" src={BurguenoAdaMargaret} alt="Imagen de Burgueno Ada Margaret" /></Link>, <Link key="Cabezudo Carlos" href="CabezudoCarlos"><Image placeholder="blur" src={CabezudoCarlos} alt="Imagen de Cabezudo Carlos" /></Link>, <Link key="Cabrera Ary" href="CabreraAry"><Image placeholder="blur" src={CabreraAry} alt="Imagen de Cabrera Ary" /></Link>, <Link key="Cacciavilliani Hugo" href="CacciavillianiHugo"><Image placeholder="blur" src={CacciavillianiHugo} alt="Imagen de Cacciavilliani Hugo" /></Link>, <Link key="Caitano Jose Enrique" href="CaitanoJoseEnrique"><Image placeholder="blur" src={CaitanoJoseEnrique} alt="Imagen de Caitano Jose Enrique" /></Link>, <Link key="Callaba Jose Pedro" href="CallabaJosePedro"><Image placeholder="blur" src={CallabaJosePedro} alt="Imagen de Callaba Jose Pedro" /></Link>, <Link key="Camacho Luis Alberto" href="CamachoLuisAlberto"><Image placeholder="blur" src={CamachoLuisAlberto} alt="Imagen de Camacho Luis Alberto" /></Link>, <Link key="Camiou Ma Mercedes" href="CamiouMaMercedes"><Image placeholder="blur" src={CamiouMaMercedes} alt="Imagen de Camiou Ma Mercedes" /></Link>, <Link key="Candia Franisco" href="CandiaFranisco"><Image placeholder="blur" src={CandiaFranisco} alt="Imagen de Candia Franisco" /></Link>, <Link key="Cantero Edison" href="CanteroEdison"><Image placeholder="blur" src={CanteroEdison} alt="Imagen de Cantero Edison" /></Link>, <Link key="Carneiro Andres" href="CarneiroAndres"><Image placeholder="blur" src={CarneiroAndres} alt="Imagen de Carneiro Andres" /></Link>, <Link key="Carretero Ma del Rosario" href="CarreteroMadelRosario"><Image placeholder="blur" src={CarreteroMadelRosario} alt="Imagen de Carretero Ma del Rosario" /></Link>, <Link key="Carvalho Luis Alberto" href="CarvalhoLuisAlberto"><Image placeholder="blur" src={CarvalhoLuisAlberto} alt="Imagen de Carvalho Luis Alberto" /></Link>, <Link key="Casco Yolanda" href="CascoYolanda"><Image placeholder="blur" src={CascoYolanda} alt="Imagen de Casco Yolanda" /></Link>, <Link key="Castagnetto Hector" href="CastagnettoHector"><Image placeholder="blur" src={CastagnettoHector} alt="Imagen de Castagnetto Hector" /></Link>, <Link key="Castagno Anibal" href="CastagnoAnibal"><Image placeholder="blur" src={CastagnoAnibal} alt="Imagen de Castagno Anibal" /></Link>, <Link key="Castillo Atalivas" href="CastilloAtalivas"><Image placeholder="blur" src={CastilloAtalivas} alt="Imagen de Castillo Atalivas" /></Link>, <Link key="Castro Julio" href="CastroJulio"><Image placeholder="blur" src={CastroJulio} alt="Imagen de Castro Julio" /></Link>, <Link key="Castro Ma Antonia" href="CastroMaAntonia"><Image placeholder="blur" src={CastroMaAntonia} alt="Imagen de Castro Ma Antonia" /></Link>, <Link key="Castro Roberto" href="CastroRoberto"><Image placeholder="blur" src={CastroRoberto} alt="Imagen de Castro Roberto" /></Link>, <Link key="Cendan Juan Angel" href="CendanJuanAngel"><Image placeholder="blur" src={CendanJuanAngel} alt="Imagen de Cendan Juan Angel" /></Link>, <Link key="Chaves Ubagesner" href="ChavesUbagesner"><Image placeholder="blur" src={ChavesUbagesner} alt="Imagen de Chaves Ubagesner" /></Link>, <Link key="Chegenian Segundo" href="ChegenianSegundo"><Image placeholder="blur" src={ChegenianSegundo} alt="Imagen de Chegenian Segundo" /></Link>, <Link key="Chizzola Eduardo" href="ChizzolaEduardo"><Image placeholder="blur" src={ChizzolaEduardo} alt="Imagen de Chizzola Eduardo" /></Link>, <Link key="Corchs Alberto" href="CorchsAlberto"><Image placeholder="blur" src={CorchsAlberto} alt="Imagen de Corchs Alberto" /></Link>, <Link key="Correa Julio" href="CorreaJulio"><Image placeholder="blur" src={CorreaJulio} alt="Imagen de Correa Julio" /></Link>, <Link key="Cram Washington" href="CramWashington"><Image placeholder="blur" src={CramWashington} alt="Imagen de Cram Washington" /></Link>, <Link key="Cruz Mario" href="CruzMario"><Image placeholder="blur" src={CruzMario} alt="Imagen de Cruz Mario" /></Link>, <Link key="Cubas Omar" href="CubasOmar"><Image placeholder="blur" src={CubasOmar} alt="Imagen de Cubas Omar" /></Link>, <Link key="Da Silveira Graciela" href="DaSilveiraGraciela"><Image placeholder="blur" src={DaSilveiraGraciela} alt="Imagen de Da Silveira Graciela" /></Link>, <Link key="De Gouveia Graciela" href="DeGouveiaGraciela"><Image placeholder="blur" src={DeGouveiaGraciela} alt="Imagen de De Gouveia Graciela" /></Link>, <Link key="De Gregorio Oscar" href="DeGregorioOscar"><Image placeholder="blur" src={DeGregorioOscar} alt="Imagen de De Gregorio Oscar" /></Link>, <Link key="De Leon Juan" href="DeLeonJuan"><Image placeholder="blur" src={DeLeonJuan} alt="Imagen de De Leon Juan" /></Link>, <Link key="Del Fabro Eduardo" href="DelFabroEduardo"><Image placeholder="blur" src={DelFabroEduardo} alt="Imagen de Del Fabro Eduardo" /></Link>, <Link key="Delia Julio Cesar" href="DeliaJulioCesar"><Image placeholder="blur" src={DeliaJulioCesar} alt="Imagen de Delia Julio Cesar" /></Link>, <Link key="Delpino Jupiter" href="DelpinoJupiter"><Image placeholder="blur" src={DelpinoJupiter} alt="Imagen de Delpino Jupiter" /></Link>, <Link key="Dergan Natalio" href="DerganNatalio"><Image placeholder="blur" src={DerganNatalio} alt="Imagen de Dergan Natalio" /></Link>, <Link key="Diaz Fernando" href="DiazFernando"><Image placeholder="blur" src={DiazFernando} alt="Imagen de Diaz Fernando" /></Link>, <Link key="Dossetti Edmundo" href="DossettiEdmundo"><Image placeholder="blur" src={DossettiEdmundo} alt="Imagen de Dossetti Edmundo" /></Link>, <Link key="Duarte Leon" href="DuarteLeon"><Image placeholder="blur" src={DuarteLeon} alt="Imagen de Duarte Leon" /></Link>, <Link key="Epelbaum Claudio" href="EpelbaumClaudio"><Image placeholder="blur" src={EpelbaumClaudio} alt="Imagen de Epelbaum Claudio" /></Link>, <Link key="Epelbaum Lila" href="EpelbaumLila"><Image placeholder="blur" src={EpelbaumLila} alt="Imagen de Epelbaum Lila" /></Link>, <Link key="Errandonea Juan Pablo" href="ErrandoneaJuanPablo"><Image placeholder="blur" src={ErrandoneaJuanPablo} alt="Imagen de Errandonea Juan Pablo" /></Link>, <Link key="Escudero Julio" href="EscuderoJulio"><Image placeholder="blur" src={EscuderoJulio} alt="Imagen de Escudero Julio" /></Link>, <Link key="Fernandez Elsa" href="FernandezElsa"><Image placeholder="blur" src={FernandezElsa} alt="Imagen de Fernandez Elsa" /></Link>, <Link key="Fernandez Juan Guillermo" href="FernandezJuanGuillermo"><Image placeholder="blur" src={FernandezJuanGuillermo} alt="Imagen de Fernandez Juan Guillermo" /></Link>, <Link key="Fernandez Julio Cesar" href="FernandezJulioCesar"><Image placeholder="blur" src={FernandezJulioCesar} alt="Imagen de Fernandez Julio Cesar" /></Link>, <Link key="Filipazzi Rafaela" href="FilipazziRafaela"><Image placeholder="blur" src={FilipazziRafaela} alt="Imagen de Filipazzi Rafaela" /></Link>, <Link key="Fontela Alberto" href="FontelaAlberto"><Image placeholder="blur" src={FontelaAlberto} alt="Imagen de Fontela Alberto" /></Link>, <Link key="Gadea Nelsa" href="GadeaNelsa"><Image placeholder="blur" src={GadeaNelsa} alt="Imagen de Gadea Nelsa" /></Link>, <Link key="Gallo Eduardo" href="GalloEduardo"><Image placeholder="blur" src={GalloEduardo} alt="Imagen de Gallo Eduardo" /></Link>, <Link key="Gambaro Raul" href="GambaroRaul"><Image placeholder="blur" src={GambaroRaul} alt="Imagen de Gambaro Raul" /></Link>, <Link key="Gandara Elba" href="GandaraElba"><Image placeholder="blur" src={GandaraElba} alt="Imagen de Gandara Elba" /></Link>, <Link key="Garcia German" href="GarciaGerman"><Image placeholder="blur" src={GarciaGerman} alt="Imagen de Garcia German" /></Link>, <Link key="Garcia Ileana" href="GarciaIleana"><Image placeholder="blur" src={GarciaIleana} alt="Imagen de Garcia Ileana" /></Link>, <Link key="Garcia Ma Claudia" href="GarciaMaClaudia"><Image placeholder="blur" src={GarciaMaClaudia} alt="Imagen de Garcia Ma Claudia" /></Link>, <Link key="Garcia Manuel" href="GarciaManuel"><Image placeholder="blur" src={GarciaManuel} alt="Imagen de Garcia Manuel" /></Link>, <Link key="Garreiro Elsa" href="GarreiroElsa"><Image placeholder="blur" src={GarreiroElsa} alt="Imagen de Garreiro Elsa" /></Link>, <Link key="Gatti Adriana" href="GattiAdriana"><Image placeholder="blur" src={GattiAdriana} alt="Imagen de Gatti Adriana" /></Link>, <Link key="Gatti Gerardo" href="GattiGerardo"><Image placeholder="blur" src={GattiGerardo} alt="Imagen de Gatti Gerardo" /></Link>, <Link key="Gelos Horacio" href="GelosHoracio"><Image placeholder="blur" src={GelosHoracio} alt="Imagen de Gelos Horacio" /></Link>, <Link key="Gelpi Leonardo" href="GelpiLeonardo"><Image placeholder="blur" src={GelpiLeonardo} alt="Imagen de Gelpi Leonardo" /></Link>, <Link key="Gersberg Esther" href="GersbergEsther"><Image placeholder="blur" src={GersbergEsther} alt="Imagen de Gersberg Esther" /></Link>, <Link key="Giordano Hector" href="GiordanoHector"><Image placeholder="blur" src={GiordanoHector} alt="Imagen de Giordano Hector" /></Link>, <Link key="Gomensoro Hugo" href="GomensoroHugo"><Image placeholder="blur" src={GomensoroHugo} alt="Imagen de Gomensoro Hugo" /></Link>, <Link key="Gomensoro Roberto" href="GomensoroRoberto"><Image placeholder="blur" src={GomensoroRoberto} alt="Imagen de Gomensoro Roberto" /></Link>, <Link key="Gomez Celica" href="GomezCelica"><Image placeholder="blur" src={GomezCelica} alt="Imagen de Gomez Celica" /></Link>, <Link key="Goncalvez Jorge" href="GoncalvezJorge"><Image placeholder="blur" src={GoncalvezJorge} alt="Imagen de Goncalvez Jorge" /></Link>, <Link key="Goni Dario Gilberto" href="GoniDarioGilberto"><Image placeholder="blur" src={GoniDarioGilberto} alt="Imagen de Goni Dario Gilberto" /></Link>, <Link key="Gonzalez Luis Eduardo" href="GonzalezLuisEduardo"><Image placeholder="blur" src={GonzalezLuisEduardo} alt="Imagen de Gonzalez Luis Eduardo" /></Link>, <Link key="Gonzalez Nelson" href="GonzalezNelson"><Image placeholder="blur" src={GonzalezNelson} alt="Imagen de Gonzalez Nelson" /></Link>, <Link key="Goycoechea Gustavo" href="GoycoecheaGustavo"><Image placeholder="blur" src={GoycoecheaGustavo} alt="Imagen de Goycoechea Gustavo" /></Link>, <Link key="Grinspon Monica" href="GrinsponMonica"><Image placeholder="blur" src={GrinsponMonica} alt="Imagen de Grinspon Monica" /></Link>, <Link key="Grisonas Victoria" href="GrisonasVictoria"><Image placeholder="blur" src={GrisonasVictoria} alt="Imagen de Grisonas Victoria" /></Link>, <Link key="Guaz Carlos" href="GuazCarlos"><Image placeholder="blur" src={GuazCarlos} alt="Imagen de Guaz Carlos" /></Link>, <Link key="Hernandez Carlos" href="HernandezCarlos"><Image placeholder="blur" src={HernandezCarlos} alt="Imagen de Hernandez Carlos" /></Link>, <Link key="Hernandez Hobbas Beatriz" href="HernandezHobbasBeatriz"><Image placeholder="blur" src={HernandezHobbasBeatriz} alt="Imagen de Hernandez Hobbas Beatriz" /></Link>, <Link key="Hernandez Hobbas Washington" href="HernandezHobbasWashington"><Image placeholder="blur" src={HernandezHobbasWashington} alt="Imagen de Hernandez Hobbas Washington" /></Link>, <Link key="Hernandez Jorge" href="HernandezJorge"><Image placeholder="blur" src={HernandezJorge} alt="Imagen de Hernandez Jorge" /></Link>, <Link key="Hobbas Lourdes" href="HobbasLourdes"><Image placeholder="blur" src={HobbasLourdes} alt="Imagen de Hobbas Lourdes" /></Link>, <Link key="Ibarbia Ma Angelica" href="IbarbiaMaAngelica"><Image placeholder="blur" src={IbarbiaMaAngelica} alt="Imagen de Ibarbia Ma Angelica" /></Link>, <Link key="Insausti Juan Carlos" href="InsaustiJuanCarlos"><Image placeholder="blur" src={InsaustiJuanCarlos} alt="Imagen de Insausti Juan Carlos" /></Link>, <Link key="Inzaurraldde Gustavo" href="InzaurralddeGustavo"><Image placeholder="blur" src={InzaurralddeGustavo} alt="Imagen de Inzaurraldde Gustavo" /></Link>, <Link key="Islas Ma Emilia" href="IslasMaEmilia"><Image placeholder="blur" src={IslasMaEmilia} alt="Imagen de Islas Ma Emilia" /></Link>, <Link key="Julien Mario" href="JulienMario"><Image placeholder="blur" src={JulienMario} alt="Imagen de Julien Mario" /></Link>, <Link key="Keim Josefina" href="KeimJosefina"><Image placeholder="blur" src={KeimJosefina} alt="Imagen de Keim Josefina" /></Link>, <Link key="Lema Miguel Angel" href="LemaMiguelAngel"><Image placeholder="blur" src={LemaMiguelAngel} alt="Imagen de Lema Miguel Angel" /></Link>, <Link key="Lerena Elena" href="LerenaElena"><Image placeholder="blur" src={LerenaElena} alt="Imagen de Lerena Elena" /></Link>, <Link key="Lezama Rafael" href="LezamaRafael"><Image placeholder="blur" src={LezamaRafael} alt="Imagen de Lezama Rafael" /></Link>, <Link key="Liberoff Manuel" href="LiberoffManuel"><Image placeholder="blur" src={LiberoffManuel} alt="Imagen de Liberoff Manuel" /></Link>, <Link key="Logares Claudio" href="LogaresClaudio"><Image placeholder="blur" src={LogaresClaudio} alt="Imagen de Logares Claudio" /></Link>, <Link key="Lopez Arazati" href="LopezArazati"><Image placeholder="blur" src={LopezArazati} alt="Imagen de Lopez Arazati" /></Link>, <Link key="Lucas Enrique" href="LucasEnrique"><Image placeholder="blur" src={LucasEnrique} alt="Imagen de Lucas Enrique" /></Link>, <Link key="Luppi Mary" href="LuppiMary"><Image placeholder="blur" src={LuppiMary} alt="Imagen de Luppi Mary" /></Link>, <Link key="Machado Humberto" href="MachadoHumberto"><Image placeholder="blur" src={MachadoHumberto} alt="Imagen de Machado Humberto" /></Link>, <Link key="Maidana Felix" href="MaidanaFelix"><Image placeholder="blur" src={MaidanaFelix} alt="Imagen de Maidana Felix" /></Link>, <Link key="Martinez Fernando" href="MartinezFernando"><Image placeholder="blur" src={MartinezFernando} alt="Imagen de Martinez Fernando" /></Link>, <Link key="Martinez Jorge" href="MartinezJorge"><Image placeholder="blur" src={MartinezJorge} alt="Imagen de Martinez Jorge" /></Link>, <Link key="Martinez Jose" href="MartinezJose"><Image placeholder="blur" src={MartinezJose} alt="Imagen de Martinez Jose" /></Link>, <Link key="Mato Miguel" href="MatoMiguel"><Image placeholder="blur" src={MatoMiguel} alt="Imagen de Mato Miguel" /></Link>, <Link key="Mazzuchi Winston" href="MazzuchiWinston"><Image placeholder="blur" src={MazzuchiWinston} alt="Imagen de Mazzuchi Winston" /></Link>, <Link key="Mechoso Alberto" href="MechosoAlberto"><Image placeholder="blur" src={MechosoAlberto} alt="Imagen de Mechoso Alberto" /></Link>, <Link key="Melo Cuesta Nebio" href="MeloCuestaNebio"><Image placeholder="blur" src={MeloCuestaNebio} alt="Imagen de Melo Cuesta Nebio" /></Link>, <Link key="Mendez Hugo" href="MendezHugo"><Image placeholder="blur" src={MendezHugo} alt="Imagen de Mendez Hugo" /></Link>, <Link key="Micheff Juan" href="MicheffJuan"><Image placeholder="blur" src={MicheffJuan} alt="Imagen de Micheff Juan" /></Link>, <Link key="Michelena Enrique" href="MichelenaEnrique"><Image placeholder="blur" src={MichelenaEnrique} alt="Imagen de Michelena Enrique" /></Link>, <Link key="Miranda Fernando" href="MirandaFernando"><Image placeholder="blur" src={MirandaFernando} alt="Imagen de Miranda Fernando" /></Link>, <Link key="Miranda Urano" href="MirandaUrano"><Image placeholder="blur" src={MirandaUrano} alt="Imagen de Miranda Urano" /></Link>, <Link key="Modernell Carlos" href="ModernellCarlos"><Image placeholder="blur" src={ModernellCarlos} alt="Imagen de Modernell Carlos" /></Link>, <Link key="Montes de Oca Otermin" href="MontesdeOcaOtermin"><Image placeholder="blur" src={MontesdeOcaOtermin} alt="Imagen de Montes de Oca Otermin" /></Link>, <Link key="Morales Juan" href="MoralesJuan"><Image placeholder="blur" src={MoralesJuan} alt="Imagen de Morales Juan" /></Link>, <Link key="Moreno Miguel" href="MorenoMiguel"><Image placeholder="blur" src={MorenoMiguel} alt="Imagen de Moreno Miguel" /></Link>, <Link key="Moyano Alfredo" href="MoyanoAlfredo"><Image placeholder="blur" src={MoyanoAlfredo} alt="Imagen de Moyano Alfredo" /></Link>, <Link key="Olivera Raul Pedro" href="OliveraRaulPedro"><Image placeholder="blur" src={OliveraRaulPedro} alt="Imagen de Olivera Raul Pedro" /></Link>, <Link key="Oneil Eduardo" href="OneilEduardo"><Image placeholder="blur" src={OneilEduardo} alt="Imagen de Oneil Eduardo" /></Link>, <Link key="Ortiz Felix" href="OrtizFelix"><Image placeholder="blur" src={OrtizFelix} alt="Imagen de Ortiz Felix" /></Link>, <Link key="Osorio Pablo" href="OsorioPablo"><Image placeholder="blur" src={OsorioPablo} alt="Imagen de Osorio Pablo" /></Link>, <Link key="Paciello Asdrubal" href="PacielloAsdrubal"><Image placeholder="blur" src={PacielloAsdrubal} alt="Imagen de Paciello Asdrubal" /></Link>, <Link key="Pagardoy Enrique" href="PagardoyEnrique"><Image placeholder="blur" src={PagardoyEnrique} alt="Imagen de Pagardoy Enrique" /></Link>, <Link key="Paitta Antonio Omar" href="PaittaAntonioOmar"><Image placeholder="blur" src={PaittaAntonioOmar} alt="Imagen de Paitta Antonio Omar" /></Link>, <Link key="Pedreira Jorge" href="PedreiraJorge"><Image placeholder="blur" src={PedreiraJorge} alt="Imagen de Pedreira Jorge" /></Link>, <Link key="Pelua Jose Luis" href="PeluaJoseLuis"><Image placeholder="blur" src={PeluaJoseLuis} alt="Imagen de Pelua Jose Luis" /></Link>, <Link key="Pelua Martin" href="PeluaMartin"><Image placeholder="blur" src={PeluaMartin} alt="Imagen de Pelua Martin" /></Link>, <Link key="Pereira Renee" href="PereiraRenee"><Image placeholder="blur" src={PereiraRenee} alt="Imagen de Pereira Renee" /></Link>, <Link key="Perez Eduardo" href="PerezEduardo"><Image placeholder="blur" src={PerezEduardo} alt="Imagen de Perez Eduardo" /></Link>, <Link key="Potenza Jose" href="PotenzaJose"><Image placeholder="blur" src={PotenzaJose} alt="Imagen de Potenza Jose" /></Link>, <Link key="Povaschuk Juan" href="PovaschukJuan"><Image placeholder="blur" src={PovaschukJuan} alt="Imagen de Povaschuk Juan" /></Link>, <Link key="Prieto Ruben" href="PrietoRuben"><Image placeholder="blur" src={PrietoRuben} alt="Imagen de Prieto Ruben" /></Link>, <Link key="Queiro Washington" href="QueiroWashington"><Image placeholder="blur" src={QueiroWashington} alt="Imagen de Queiro Washington" /></Link>, <Link key="Quinones Modesto" href="QuinonesModesto"><Image placeholder="blur" src={QuinonesModesto} alt="Imagen de Quinones Modesto" /></Link>, <Link key="Quinteros Elena" href="QuinterosElena"><Image placeholder="blur" src={QuinterosElena} alt="Imagen de Quinteros Elena" /></Link>, <Link key="Raina Carlos" href="RainaCarlos"><Image placeholder="blur" src={RainaCarlos} alt="Imagen de Raina Carlos" /></Link>, <Link key="Rando Francisco" href="RandoFrancisco"><Image placeholder="blur" src={RandoFrancisco} alt="Imagen de Rando Francisco" /></Link>, <Link key="Recagno Juan Pablo" href="RecagnoJuanPablo"><Image placeholder="blur" src={RecagnoJuanPablo} alt="Imagen de Recagno Juan Pablo" /></Link>, <Link key="Rio Miguel Angel" href="RioMiguelAngel"><Image placeholder="blur" src={RioMiguelAngel} alt="Imagen de Rio Miguel Angel" /></Link>, <Link key="Rodriguez Blanca" href="RodriguezBlanca"><Image placeholder="blur" src={RodriguezBlanca} alt="Imagen de Rodriguez Blanca" /></Link>, <Link key="Rodriguez Carlos" href="RodriguezCarlos"><Image placeholder="blur" src={RodriguezCarlos} alt="Imagen de Rodriguez Carlos" /></Link>, <Link key="Rodriguez Ever" href="RodriguezEver"><Image placeholder="blur" src={RodriguezEver} alt="Imagen de Rodriguez Ever" /></Link>, <Link key="Rodriguez Felix" href="RodriguezFelix"><Image placeholder="blur" src={RodriguezFelix} alt="Imagen de Rodriguez Felix" /></Link>, <Link key="Rodriguez Julio" href="RodriguezJulio"><Image placeholder="blur" src={RodriguezJulio} alt="Imagen de Rodriguez Julio" /></Link>, <Link key="Sanjurjo Amelia" href="SanjurjoAmelia"><Image placeholder="blur" src={SanjurjoAmelia} alt="Imagen de Sanjurjo Amelia" /></Link>, <Link key="Santana Nelson" href="SantanaNelson"><Image placeholder="blur" src={SantanaNelson} alt="Imagen de Santana Nelson" /></Link>, <Link key="Sanz Aida" href="SanzAida"><Image placeholder="blur" src={SanzAida} alt="Imagen de Sanz Aida" /></Link>, <Link key="Scopise Norma" href="ScopiseNorma"><Image placeholder="blur" src={ScopiseNorma} alt="Imagen de Scopise Norma" /></Link>, <Link key="Sena Olivar" href="SenaOlivar"><Image placeholder="blur" src={SenaOlivar} alt="Imagen de Sena Olivar" /></Link>, <Link key="Serra Helios" href="SerraHelios"><Image placeholder="blur" src={SerraHelios} alt="Imagen de Serra Helios" /></Link>, <Link key="Severo Ary" href="SeveroAry"><Image placeholder="blur" src={SeveroAry} alt="Imagen de Severo Ary" /></Link>, <Link key="Severo Carlos" href="SeveroCarlos"><Image placeholder="blur" src={SeveroCarlos} alt="Imagen de Severo Carlos" /></Link>, <Link key="Severo Marta" href="SeveroMarta"><Image placeholder="blur" src={SeveroMarta} alt="Imagen de Severo Marta" /></Link>, <Link key="Silva Kleber" href="SilvaKleber"><Image placeholder="blur" src={SilvaKleber} alt="Imagen de Silva Kleber" /></Link>, <Link key="Silveira Ma Rosa" href="SilveiraMaRosa"><Image placeholder="blur" src={SilveiraMaRosa} alt="Imagen de Silveira Ma Rosa" /></Link>, <Link key="Soba Adalberto" href="SobaAdalberto"><Image placeholder="blur" src={SobaAdalberto} alt="Imagen de Soba Adalberto" /></Link>, <Link key="Sobrino Guillermo" href="SobrinoGuillermo"><Image placeholder="blur" src={SobrinoGuillermo} alt="Imagen de Sobrino Guillermo" /></Link>, <Link key="Soca Juan" href="SocaJuan"><Image placeholder="blur" src={SocaJuan} alt="Imagen de Soca Juan" /></Link>, <Link key="Sosa Valdez Lujan" href="SosaValdezLujan"><Image placeholder="blur" src={SosaValdezLujan} alt="Imagen de Sosa Valdez Lujan" /></Link>, <Link key="Stroman Adolfo" href="StromanAdolfo"><Image placeholder="blur" src={StromanAdolfo} alt="Imagen de Stroman Adolfo" /></Link>, <Link key="Tassino Oscar" href="TassinoOscar"><Image placeholder="blur" src={TassinoOscar} alt="Imagen de Tassino Oscar" /></Link>, <Link key="Tejera Raul" href="TejeraRaul"><Image placeholder="blur" src={TejeraRaul} alt="Imagen de Tejera Raul" /></Link>, <Link key="Trias Cecilia" href="TriasCecilia"><Image placeholder="blur" src={TriasCecilia} alt="Imagen de Trias Cecilia" /></Link>, <Link key="Trinidad Liver" href="TrinidadLiver"><Image placeholder="blur" src={TrinidadLiver} alt="Imagen de Trinidad Liver" /></Link>, <Link key="Urtasun Jose Luis" href="UrtasunJoseLuis"><Image placeholder="blur" src={UrtasunJoseLuis} alt="Imagen de Urtasun Jose Luis" /></Link>, <Link key="Villaflor Raimundo" href="VillaflorRaimundo"><Image placeholder="blur" src={VillaflorRaimundo} alt="Imagen de Villaflor Raimundo" /></Link>, <Link key="Wurm Wilhelm" href="WurmWilhelm"><Image placeholder="blur" src={WurmWilhelm} alt="Imagen de Wurm Wilhelm" /></Link>, <Link key="Zaffaroni Jorge" href="ZaffaroniJorge"><Image placeholder="blur" src={ZaffaroniJorge} alt="Imagen de Zaffaroni Jorge" /></Link>, <Link key="Zuazu Ma Nieves" href="ZuazuMaNieves"><Image placeholder="blur" src={ZuazuMaNieves} alt="Imagen de Zuazu Ma Nieves" /></Link>];


export default function Home() {
  return (
    <>
      <Head>
        <title>27ᵃ Marcha del Silencio</title>
        <meta name="description" content="Accedé a los retratos de las y los desaparecidos para sostenerlos en la Marcha del Silencio."/>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1>IMÁGENES DEL SILENCIO</h1>
          <div className={styles.socialNetworks}>
            <a href="https://twitter.com/img_delsilencio" target="_blank" rel="noreferrer noopener">TWITTER</a>
            <a href="https://www.instagram.com/imagenes.del.silencio" target="_blank" rel="noreferrer noopener">INSTAGRAM</a>
            <a href="https://www.facebook.com/imagenesdelsilencio/" target="_blank" rel="noreferrer noopener">FACEBOOK</a>
          </div>
          <Image src={MadresYFamiliaresLogo} alt="Logo de Madres y Familiares de Detenidos desaparecidos"/>
        </div>
      </header>
      <main className={styles.main}>
        {
          images.map((image) => image)
        }
      </main>
      <footer className={styles.footer}>
        <a href="https://twitter.com/img_delsilencio" target="_blank" rel="noreferrer noopener">TWITTER</a>
        <a href="https://www.instagram.com/imagenes.del.silencio" target="_blank" rel="noreferrer noopener">INSTAGRAM</a>
        <a href="https://www.facebook.com/imagenesdelsilencio/" target="_blank" rel="noreferrer noopener">FACEBOOK</a>
      </footer>
    </>
  );
}
