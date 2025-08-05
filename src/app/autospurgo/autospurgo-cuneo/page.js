import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cuneo",
    canonical: links.autospurgo["cuneo"],
});
export default withBaseProps({ 
    title: "Autospurgo Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["cuneo"],
        name: "Cuneo",
    }),
});
