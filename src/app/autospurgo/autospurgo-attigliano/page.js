import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Attigliano",
    canonical: links.autospurgo["attigliano"],
});
export default withBaseProps({ 
    title: "Autospurgo Attigliano", 
    locationNames: {label: "Attigliano", href: "attigliano"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
