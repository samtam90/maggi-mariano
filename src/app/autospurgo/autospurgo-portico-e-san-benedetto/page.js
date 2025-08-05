import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Portico e San Benedetto",
    canonical: links.autospurgo["portico-e-san-benedetto"],
});
export default withBaseProps({ 
    title: "Autospurgo Portico e San Benedetto", 
    locationNames: {label: "Portico e San Benedetto", href: "portico-e-san-benedetto"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
