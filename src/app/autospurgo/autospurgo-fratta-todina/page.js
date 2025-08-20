import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Fratta Todina",
    canonical: links.autospurgo["fratta-todina"],
});
export default withBaseProps({ 
    title: "Autospurgo Fratta Todina", 
    locationNames: {label: "Fratta Todina", href: "fratta-todina"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
