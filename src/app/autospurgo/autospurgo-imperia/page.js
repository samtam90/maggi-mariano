import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Imperia",
    canonical: links.autospurgo["imperia"],
});
export default withBaseProps({ 
    title: "Autospurgo Imperia", 
    locationNames: {label: "Imperia", href: "imperia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["imperia"],
        name: "Imperia",
    }),
});
