import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Rigutino",
    canonical: links.autospurgo["rigutino"],
});
export default withBaseProps({ 
    title: "Autospurgo Rigutino", 
    locationNames: {label: "Rigutino", href: "rigutino"}  
});
