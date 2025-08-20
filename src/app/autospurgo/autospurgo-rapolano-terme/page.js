import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Rapolano Terme",
    canonical: links.autospurgo["rapolano-terme"],
});
export default withBaseProps({ 
    title: "Autospurgo Rapolano Terme", 
    locationNames: {label: "Rapolano Terme", href: "rapolano-terme"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
