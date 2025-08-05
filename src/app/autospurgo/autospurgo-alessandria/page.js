import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Alessandria",
    canonical: links.autospurgo["alessandria"],
});
export default withBaseProps({ 
    title: "Autospurgo Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["alessandria"],
        name: "Alessandria",
    }),
});
