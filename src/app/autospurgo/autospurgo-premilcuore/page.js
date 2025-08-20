import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Premilcuore",
    canonical: links.autospurgo["premilcuore"],
});
export default withBaseProps({ 
    title: "Autospurgo Premilcuore", 
    locationNames: {label: "Premilcuore", href: "premilcuore"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
