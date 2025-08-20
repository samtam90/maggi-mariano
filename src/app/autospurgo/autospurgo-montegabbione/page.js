import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montegabbione",
    canonical: links.autospurgo["montegabbione"],
});
export default withBaseProps({ 
    title: "Autospurgo Montegabbione", 
    locationNames: {label: "Montegabbione", href: "montegabbione"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
