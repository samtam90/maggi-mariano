import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cerreto Guidi",
    canonical: links.autospurgo["cerreto-guidi"],
});
export default withBaseProps({ 
    title: "Autospurgo Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
