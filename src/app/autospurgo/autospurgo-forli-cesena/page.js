import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Forlì-Cesena",
    canonical: links.autospurgo["forli-cesena"],
});
export default withBaseProps({ 
    title: "Autospurgo Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì-Cesena",
    }),
});
