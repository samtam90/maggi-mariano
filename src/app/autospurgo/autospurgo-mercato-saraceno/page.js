import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Mercato Saraceno",
    canonical: links.autospurgo["mercato-saraceno"],
});
export default withBaseProps({ 
    title: "Autospurgo Mercato Saraceno", 
    locationNames: {label: "Mercato Saraceno", href: "mercato-saraceno"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
