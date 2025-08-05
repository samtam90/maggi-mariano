import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Mauro Pascoli",
    canonical: links.autospurgo["san-mauro-pascoli"],
});
export default withBaseProps({ 
    title: "Autospurgo San Mauro Pascoli", 
    locationNames: {label: "San Mauro Pascoli", href: "san-mauro-pascoli"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
