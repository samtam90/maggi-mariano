import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cerreto Guidi",
  canonical: links.servizi["disidratazione-fanghi"]["cerreto-guidi"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cerreto Guidi",
  locationNames: { label: "Cerreto Guidi", href: "cerreto-guidi" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
