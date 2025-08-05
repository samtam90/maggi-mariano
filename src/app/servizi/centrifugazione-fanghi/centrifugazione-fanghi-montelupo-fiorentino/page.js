import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montelupo Fiorentino",
  canonical: links.servizi["centrifugazione-fanghi"]["montelupo-fiorentino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montelupo Fiorentino",
  locationNames: { label: "Montelupo Fiorentino", href: "montelupo-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
