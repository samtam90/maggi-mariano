import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Caltanissetta",
    canonical: links.autospurgo["caltanissetta"],
});
export default withBaseProps({ 
    title: "Autospurgo Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["caltanissetta"],
        name: "Caltanissetta",
    }),
});
