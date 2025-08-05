import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Dicomano",
  canonical: links.servizi["noleggio-bagni-chimici"]["dicomano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Dicomano",
  locationNames: { label: "Dicomano", href: "dicomano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
