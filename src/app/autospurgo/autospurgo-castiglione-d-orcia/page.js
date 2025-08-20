import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castiglione d'Orcia",
    canonical: links.autospurgo["castiglione-d-orcia"],
});
export default withBaseProps({ 
    title: "Autospurgo Castiglione d'Orcia", 
    locationNames: {label: "Castiglione d'Orcia", href: "castiglione-d-orcia"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
