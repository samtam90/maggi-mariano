import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Figline e Incisa Valdarno",
  canonical: links.servizi["pulizia-fognature"]["figline-e-incisa-valdarno"],
});
export default withBaseProps({
  title: "Pulizia fognature Figline e Incisa Valdarno",
  locationNames: { label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
