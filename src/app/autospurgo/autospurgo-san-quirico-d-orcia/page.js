import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Quirico d'Orcia",
    canonical: links.autospurgo["san-quirico-d-orcia"],
});
export default withBaseProps({ 
    title: "Autospurgo San Quirico d'Orcia", 
    locationNames: {label: "San Quirico d'Orcia", href: "san-quirico-d-orcia"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
