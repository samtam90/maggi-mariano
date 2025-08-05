import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Reggio Calabria",
    canonical: links.autospurgo["reggio-calabria"],
});
export default withBaseProps({ 
    title: "Autospurgo Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["reggio-calabria"],
        name: "Reggio Calabria",
    }),
});
