package ua.ithillel.marketdrive.model;

import java.util.ArrayList;
import java.util.List;

public class TemplateModel {

    private Templates template;
    private List<TemplatesList> templatesLists = new ArrayList<>();

    public TemplateModel() {
    }

    public TemplateModel(Templates template, List<TemplatesList> templatesLists) {
        this.template = template;
        this.templatesLists = templatesLists;
    }

    public Templates getTemplate() {
        return template;
    }

    public void setTemplate(Templates template) {
        this.template = template;
    }

    public List<TemplatesList> getTemplatesLists() {
        return templatesLists;
    }

    public void setTemplatesLists(List<TemplatesList> templatesLists) {
        this.templatesLists = templatesLists;
    }

}