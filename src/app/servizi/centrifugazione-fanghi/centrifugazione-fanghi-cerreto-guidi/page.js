import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cerreto Guidi",
  canonical: links.servizi["centrifugazione-fanghi"]["cerreto-guidi"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cerreto Guidi",
  locationNames: { label: "Cerreto Guidi", href: "cerreto-guidi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
