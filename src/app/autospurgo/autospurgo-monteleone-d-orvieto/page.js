import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Monteleone d'Orvieto",
    canonical: links.autospurgo["monteleone-d-orvieto"],
});
export default withBaseProps({ 
    title: "Autospurgo Monteleone d'Orvieto", 
    locationNames: {label: "Monteleone d'Orvieto", href: "monteleone-d-orvieto"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
