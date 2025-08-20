import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Monteroni d'Arbia",
    canonical: links.autospurgo["monteroni-d-arbia"],
});
export default withBaseProps({ 
    title: "Autospurgo Monteroni d'Arbia", 
    locationNames: {label: "Monteroni d'Arbia", href: "monteroni-d-arbia"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
