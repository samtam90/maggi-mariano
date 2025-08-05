import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Palazzuolo sul Senio",
    canonical: links.autospurgo["palazzuolo-sul-senio"],
});
export default withBaseProps({ 
    title: "Autospurgo Palazzuolo sul Senio", 
    locationNames: {label: "Palazzuolo sul Senio", href: "palazzuolo-sul-senio"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
